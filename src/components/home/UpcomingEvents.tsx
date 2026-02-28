import { supabase } from "@/lib/supabase";
import { ListItem } from "@/src/components/ListItem";
import { ALL_EVENTS } from "@/src/constants/mockData";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface UpcomingEventsProps {
  selectedCategory: string;
}

export const UpcomingEvents = ({ selectedCategory }: UpcomingEventsProps) => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      let query = supabase.from("events").select(
        `
          *,
          ticket_tiers (
            price
          )
        `,
      );

      // Apply category filter if not "All Events"
      if (selectedCategory !== "All Events") {
        query = query.eq("category", selectedCategory.toUpperCase());
      }

      // Fetch events AND their related ticket_tiers to calculate the "Starting from" price
      const { data, error } = await query.order("date", { ascending: true }); // Order by date for "Upcoming" logic

      if (!error && data) {
        // Process data to find the lowest price for each event
        const eventsWithPrices = data.map((event: any) => {
          let minPrice = "TBD";
          if (event.ticket_tiers && event.ticket_tiers.length > 0) {
            // Find the lowest price among tiers
            const prices = event.ticket_tiers.map((t: any) => t.price);
            const lowest = Math.min(...prices);
            minPrice = lowest === 0 ? "Free" : `$${lowest.toFixed(2)}`;
          }
          return { ...event, calculatedPrice: minPrice };
        });
        setEvents(eventsWithPrices);
      }
    };
    fetchEvents();
  }, [selectedCategory]); // Re-run when category changes

  // Use DB data if available, otherwise fallback to mock data
  const displayEvents = events.length > 0 ? events : ALL_EVENTS;

  // Derive "Happening Soon" (first 3 events)
  const upcomingEvents = displayEvents.slice(0, 3);

  // Derive "More Events" (remaining events)
  const moreEvents = displayEvents.slice(3);

  return (
    <View className="mt-8 px-5">
      <Text className="text-txt-main text-xl font-bold mb-2">
        Happening Soon
      </Text>
      {upcomingEvents.map((event) => (
        <ListItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          time={event.time}
          location={event.location}
          image={event.image_url || event.image} // Fallback for mock data structure
          price={event.calculatedPrice || event.price || "TBD"}
          category={event.category}
        />
      ))}

      <Text className="text-txt-main text-xl font-bold mb-2 mt-8">
        More Events
      </Text>
      {moreEvents.map((event, index) => (
        <View key={event.id}>
          <ListItem
            id={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            image={event.image_url || event.image}
            price={event.calculatedPrice || event.price || "TBD"}
            category={event.category}
          />
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
