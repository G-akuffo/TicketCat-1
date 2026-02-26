import React from "react";
import { Text, View } from "react-native";

export const LiveListingsHeader = () => {
  return (
    <View className="flex-row items-center px-[25px] mb-5 gap-[10px]">
      <Text className="text-txt-main text-xl font-black tracking-[-0.5px]">
        Live Listings
      </Text>
      <View className="w-2 h-2 rounded-full bg-status-success shadow-sm shadow-status-success opacity-80" />
    </View>
  );
};
