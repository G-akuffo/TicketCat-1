import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const PILL_SIZE = 42;
const BAR_HEIGHT = 85;

export function AnimatedTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const routes = state.routes;
  const activeIndex = state.index;
  const [barWidth, setBarWidth] = useState(0);

  const itemWidth = useMemo(
    () => (routes.length > 0 ? barWidth / routes.length : 0),
    [barWidth, routes.length],
  );

  const pillTranslateX = useSharedValue(0);

  useEffect(() => {
    if (!itemWidth) return;
    const target = activeIndex * itemWidth + (itemWidth - PILL_SIZE) / 2;
    pillTranslateX.value = withTiming(target, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    });
  }, [activeIndex, itemWidth]);

  const animatedPillStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: pillTranslateX.value }],
  }));

  return (
    <View
      onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
      className="absolute bottom-0 left-0 right-0 h-[85px] rounded-t-[32px] overflow-hidden border-t border-x border-white/15"
    >
      <BlurView intensity={70} tint="dark" className="absolute inset-0" />

      {/* Animated Background Pill */}
      <Animated.View
        pointerEvents="none"
        className="absolute rounded-full bg-white/10 border border-white/10"
        style={[
          {
            width: PILL_SIZE,
            height: PILL_SIZE,
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

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              className="items-center justify-center h-11"
              style={{ width: itemWidth || undefined }}
              activeOpacity={0.7}
            >
              {options.tabBarIcon?.({ focused: isFocused, color, size: 24 })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
