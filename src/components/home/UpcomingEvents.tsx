import { ListItem } from "@/src/components/ListItem";
import { ALL_EVENTS, UPCOMING_EVENTS } from "@/src/constants/mockData";
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

      <Text className="text-txt-main text-xl font-bold mb-2 mt-8">
        All Events
      </Text>
      {ALL_EVENTS.map((event, index) => (
        <View key={event.id}>
          <ListItem {...event} />
          {(index === 1 || index === 4) && (
            <View className="my-4 bg-surface-raised p-4 rounded-xl items-center border border-border-elevated">
              <Text className="text-txt-subtle text-xs font-bold mb-1">
                SPONSORED
              </Text>
              <Text className="text-txt-main font-semibold">
                Get 20% off your first ride with Uber!
              </Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};
