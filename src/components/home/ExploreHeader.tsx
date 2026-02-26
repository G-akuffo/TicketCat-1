import { Bell, Search } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export const ExploreHeader = () => {
  return (
    <View className="flex-row justify-between items-center px-[25px] pt-[65px] pb-5 bg-background border-b border-border-elevated">
      <View>
        <Text className="text-txt-subtle text-sm font-medium">Explore</Text>
        <Text className="text-txt-main text-[34px] font-extrabold tracking-[-1px]">
          Events
        </Text>
      </View>
      <View className="flex-row gap-3">
        <TouchableOpacity className="w-12 h-12 rounded-full bg-surface-raised border border-border-subtle justify-center items-center">
          <Search size={22} color="#a1a1aa" />
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 rounded-full bg-surface-raised border border-border-subtle justify-center items-center">
          <Bell size={22} color="#a1a1aa" />
          <View className="absolute top-[14px] right-[14px] w-2 h-2 rounded-full bg-surface-inverse border-2 border-background" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
