import { QrCode } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export const TicketsHeader = () => {
  return (
    <View className="flex-row items-center px-6 pt-[65px] pb-5 bg-background border-b border-border-elevated">
      <View className="flex-1">
        <Text className="text-txt-muted text-[10px] font-extrabold tracking-[2px]">
          MY
        </Text>
        <Text className="text-txt-main text-[28px] font-black">Tickets</Text>
      </View>
      <TouchableOpacity className="w-[45px] h-[45px] rounded-[15px] bg-surface-raised justify-center items-center border border-surface-highlight">
        <QrCode size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};
