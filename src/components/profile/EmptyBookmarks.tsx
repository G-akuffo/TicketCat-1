import { Heart } from "lucide-react-native";
import { Text, View } from "react-native";

export const EmptyBookmarks = () => {
  return (
    <View className="items-center justify-center py-[60px] gap-4">
      <Heart size={48} color="#333" />
      <Text className="text-txt-ghost text-base font-medium">
        No bookmarks yet
      </Text>
    </View>
  );
};
