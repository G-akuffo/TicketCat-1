import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const ProfileCard = () => {
  return (
    <TouchableOpacity className="flex-row items-center bg-surface-raised p-5 rounded-[24px] border border-border-elevated my-5">
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        }}
        className="w-14 h-14 rounded-[18px]"
      />
      <View className="ml-4 flex-1">
        <Text className="text-lg font-semibold text-txt-main">John Doe</Text>
        <Text className="text-[13px] text-txt-muted mt-0.5">
          john.d@ticketcat.app
        </Text>
      </View>
    </TouchableOpacity>
  );
};
