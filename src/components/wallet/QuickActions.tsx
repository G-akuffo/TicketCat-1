import { ArrowUpRight, Plus } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

export const QuickActions = () => {
  return (
    <View className="flex-row gap-4 mb-8">
      <Pressable className="flex-1 h-[60px] bg-surface-raised rounded-[16px] flex-row items-center justify-center gap-2 border border-border-subtle active:opacity-80">
        <View className="w-8 h-8 rounded-full bg-surface-highlight items-center justify-center">
          <Plus color="#fff" size={16} />
        </View>
        <Text className="text-txt-main font-bold text-sm">Top Up</Text>
      </Pressable>

      <Pressable className="flex-1 h-[60px] bg-surface-raised rounded-[16px] flex-row items-center justify-center gap-2 border border-border-subtle active:opacity-80">
        <View className="w-8 h-8 rounded-full bg-surface-highlight items-center justify-center">
          <ArrowUpRight color="#fff" size={16} />
        </View>
        <Text className="text-txt-main font-bold text-sm">Withdraw</Text>
      </Pressable>
    </View>
  );
};
