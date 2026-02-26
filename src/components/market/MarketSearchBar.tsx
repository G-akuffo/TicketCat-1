import { Filter, Search } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export const MarketSearchBar = () => {
  return (
    <View
      className="flex-row items-center px-6 pt-[60px] pb-5 gap-3"
      style={{ paddingTop: 25 }}
    >
      <View className="flex-1 h-[50px] bg-surface-raised rounded-[15px] border border-border-elevated flex-row items-center px-[15px] gap-[10px]">
        <Search color="#444" size={18} />
        <Text className="text-txt-ghost text-[13px] font-semibold">
          Search events or sellers...
        </Text>
      </View>
      <Pressable className="w-[50px] h-[50px] bg-surface-raised rounded-[15px] justify-center items-center border border-border-elevated">
        <Filter color="#fff" size={20} />
      </Pressable>
    </View>
  );
};
