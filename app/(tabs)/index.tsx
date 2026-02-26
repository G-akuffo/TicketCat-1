import CategoryButtons from "@/src/components/CategoryButtons";
import { ExploreHeader } from "@/src/components/home/ExploreHeader";
import { FeaturedSection } from "@/src/components/home/FeaturedSection";
import { UpcomingEvents } from "@/src/components/home/UpcomingEvents";
import { ScrollView, StatusBar, View } from "react-native";

export default function ExploreScreen() {
  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* STICKY HEADER */}
      <ExploreHeader />
      <CategoryButtons />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
      >
        <FeaturedSection />
        <UpcomingEvents />
      </ScrollView>
    </View>
  );
}
