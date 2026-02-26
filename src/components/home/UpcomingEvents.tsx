import { ListItem } from "@/src/components/ListItem";
import { UPCOMING_EVENTS } from "@/src/constants/mockData";
import { Text, View } from "react-native";

export const UpcomingEvents = () => {
  return (
    <View className="mt-8 px-5">
      <Text className="text-txt-main text-xl font-bold mb-2">
        Happening Soon
      </Text>
      {UPCOMING_EVENTS.map((event) => (
        <ListItem key={event.id} {...event} />
      ))}
    </View>
  );
};
