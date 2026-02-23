import CategoryButtons from "@/src/components/CategoryButtons";
import { EventCard } from "@/src/components/EventCard";
import { ListItem } from "@/src/components/ListItem";
import { FEATURED_EVENTS, UPCOMING_EVENTS } from "@/src/constants/mockData";
import { Bell, Search } from "lucide-react-native";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExploreScreen() {
  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* STICKY HEADER */}
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
      <CategoryButtons />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20 }}
      >
        <View className="flex-row justify-between items-center px-5 mb-[15px]">
          <Text className="text-txt-main text-xl font-bold">Featured</Text>
          <TouchableOpacity>
            <Text className="text-txt-subtle text-sm">See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
        >
          {FEATURED_EVENTS.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </ScrollView>

        <View className="mt-[35px] px-5">
          <Text className="text-txt-main text-xl font-bold">
            Happening Soon
          </Text>
          {UPCOMING_EVENTS.map((event) => (
            <ListItem key={event.id} {...event} />
          ))}
        </View>

        <View className="h-[120px]" />
      </ScrollView>
    </View>
  );
}
