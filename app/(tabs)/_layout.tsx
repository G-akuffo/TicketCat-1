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
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

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
    <View style={styles.iconContainer}>
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

  const pillTranslateX = useRef(new Animated.Value(0)).current;
  const PILL_SIZE = 42;
  const BAR_HEIGHT = 85;

  useEffect(() => {
    if (!itemWidth) return;
    const target =
      activeIndex * itemWidth + Math.max(0, (itemWidth - PILL_SIZE) / 2);
    Animated.timing(pillTranslateX, {
      toValue: target,
      duration: 400,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [activeIndex, itemWidth, pillTranslateX]);

  return (
    <View
      onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
      style={styles.barContainer}
    >
      <BlurView
        intensity={70}
        tint="dark"
        style={[StyleSheet.absoluteFill, styles.barBackground]}
      />

      <Animated.View
        pointerEvents="none"
        style={[
          styles.activePill,
          {
            top: (BAR_HEIGHT - PILL_SIZE) / 2,
            transform: [{ translateX: pillTranslateX }],
          },
        ]}
      />

      <View style={styles.itemsRow}>
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
              style={[styles.itemButton, { width: itemWidth || undefined }]}
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

const styles = StyleSheet.create({
  barContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: "transparent",
    elevation: 0,
    paddingTop: 0,
    overflow: "hidden",
  },
  barBackground: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  itemsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  itemButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: 44,
  },
  activePill: {
    position: "absolute",
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
});
