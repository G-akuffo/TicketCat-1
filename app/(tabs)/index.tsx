import { supabase } from "@/lib/supabase";
import CategoryButtons from "@/src/components/CategoryButtons";
import { ExploreHeader } from "@/src/components/home/ExploreHeader";
import { FeaturedSection } from "@/src/components/home/FeaturedSection";
import { UpcomingEvents } from "@/src/components/home/UpcomingEvents";
import { useEffect, useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");

  useEffect(() => {
    // Test fetch to verify Supabase connection
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        console.error("Error fetching events:", error);
      } else {
        console.log("Fetched events:", data);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* STICKY HEADER */}
      <ExploreHeader />
      <CategoryButtons
        activeCategory={selectedCategory}
        onCategoryChanged={setSelectedCategory}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
      >
        <FeaturedSection />
        <UpcomingEvents selectedCategory={selectedCategory} />
      </ScrollView>
    </View>
  );
}
