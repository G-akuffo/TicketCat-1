import { EventCard } from "@/src/components/EventCard";
import { FEATURED_EVENTS } from "@/src/constants/mockData";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export const FeaturedSection = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-5 mb-5 mt-2">
        <Text className="text-txt-main text-xl font-bold">Featured</Text>
        <TouchableOpacity>
          <Text className="text-txt-subtle text-sm">See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 24 }}
      >
        {FEATURED_EVENTS.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </ScrollView>
    </View>
  );
};
