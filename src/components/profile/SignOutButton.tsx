import { router } from "expo-router";
import { LogOut } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export const SignOutButton = () => {
  return (
    <View>
      <TouchableOpacity
        className="flex-row justify-center items-center p-[18px] rounded-[24px] border border-border-elevated mt-2.5 bg-surface-raised active:bg-surface-highlight"
        onPress={() => router.push("/login")}
      >
        <LogOut size={18} color="#FF4444" />
        <Text className="text-status-error text-[15px] font-semibold ml-2.5">
          Sign Out
        </Text>
      </TouchableOpacity>

      <View className="mt-10 mb-10 items-center">
        <Text className="text-xs text-txt-muted">
          TicketCat v2.4.0 (Build 892)
        </Text>
      </View>
    </View>
  );
};
