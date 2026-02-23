import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import {
  Cog,
  LayoutGrid,
  ShoppingBag,
  Tickets,
  Wallet,
} from "lucide-react-native";
import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.3)",
        tabBarShowLabel: false,
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerShown: false,
        headerShadowVisible: false,
      }}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={LayoutGrid} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={Wallet} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={Tickets} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={ShoppingBag} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={Cog} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

function TabIcon({
  icon: Icon,
  color,
  focused,
}: {
  icon: any;
  color: string;
  focused: boolean;
}) {
  return (
    <View className="items-center justify-center w-11 h-11">
      <Icon color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
    </View>
  );
}

function AnimatedTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const routes = state.routes;
  const activeIndex = state.index;

  const [barWidth, setBarWidth] = useState(0);
  const itemWidth = useMemo(
    () => (routes.length > 0 ? barWidth / routes.length : 0),
    [barWidth, routes.length],
  );

  const pillTranslateX = useSharedValue(0);
  const PILL_SIZE = 42;
  const BAR_HEIGHT = 85;

  useEffect(() => {
    if (!itemWidth) return;
    const target =
      activeIndex * itemWidth + Math.max(0, (itemWidth - PILL_SIZE) / 2);
    pillTranslateX.value = withTiming(target, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    });
  }, [activeIndex, itemWidth, pillTranslateX]);

  const animatedPillStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: pillTranslateX.value }],
  }));

  return (
    <View
      onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
      className="absolute bottom-0 left-0 right-0 h-[85px] rounded-t-[32px] overflow-hidden border-t border-x border-white/15"
    >
      <BlurView
        intensity={70}
        tint="dark"
        className="absolute inset-0 rounded-t-[32px]"
      />

      <Animated.View
        pointerEvents="none"
        className="absolute w-[42px] h-[42px] rounded-full bg-white/10 border border-white/10"
        style={[
          {
            top: (BAR_HEIGHT - PILL_SIZE) / 2,
          },
          animatedPillStyle,
        ]}
      />

      <View className="flex-1 flex-row items-center justify-around">
        {routes.map((route, index) => {
          const isFocused = activeIndex === index;
          const { options } = descriptors[route.key];
          const color = isFocused ? "#fff" : "rgba(255, 255, 255, 0.3)";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true } as any);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              className="items-center justify-center h-11"
              style={{ width: itemWidth || undefined }}
              activeOpacity={0.7}
            >
              {options.tabBarIcon
                ? options.tabBarIcon({ focused: isFocused, color, size: 24 })
                : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
