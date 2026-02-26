import { Landmark } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const WalletHeader = () => {
  return (
    <View className="flex-row items-center px-6 pt-[65px] pb-5 bg-background border-b border-border-elevated">
      <View className="flex-1">
        <Text className="text-txt-main text-[28px] font-black">Wallet</Text>
      </View>
      <TouchableOpacity className="w-[45px] h-[45px] rounded-[15px] bg-surface-raised justify-center items-center border border-surface-highlight">
        <Landmark size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};
