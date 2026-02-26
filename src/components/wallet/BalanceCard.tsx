import { Text, View } from "react-native";

export const BalanceCard = () => {
  return (
    <View className="mb-8">
      <Text className="text-txt-muted text-base font-medium">
        TicketCat Balance
      </Text>
      <Text className="text-txt-main text-[42px] font-bold mt-1">
        $1,240.50
      </Text>
    </View>
  );
};
