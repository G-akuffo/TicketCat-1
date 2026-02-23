import { ArrowLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface EventActionBarProps {
  onBuy: () => void;
}

export function EventActionBar({ onBuy }: EventActionBarProps) {
  return (
    <View className="absolute bottom-0 w-full px-6 pt-4 pb-8 bg-black/90 border-t border-white/10 backdrop-blur-xl">
      <View className="flex-row items-center justify-between gap-6">
        <TouchableOpacity
          onPress={onBuy}
          activeOpacity={0.8}
          className="flex-1 bg-white h-14 rounded-[20px] items-center justify-center flex-row gap-2 shadow-lg shadow-white/10"
        >
          <Text className="text-black text-base font-black tracking-wide">
            BUY TICKET
          </Text>
          <ArrowLeft
            size={18}
            color="#000"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
