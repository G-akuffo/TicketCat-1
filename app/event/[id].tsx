import TicketSelectionModal from "@/src/components/TicketSelectionModal";
import { EventActionBar } from "@/src/components/event_details/EventActionBar";
import { EventContent } from "@/src/components/event_details/EventContent";
import { EventHeader } from "@/src/components/event_details/EventHeader";
import { EventHero } from "@/src/components/event_details/EventHero";
import { EVENTS } from "@/src/constants/mockData";
import { TicketTier } from "@/src/types/event";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isTicketModalVisible, setIsTicketModalVisible] = useState(false);

  // Fallback if ID not found or mock data missing
  const event = EVENTS[id as keyof typeof EVENTS] || EVENTS["1"];

  const handleBuyTicket = (tier: TicketTier, quantity: number) => {
    console.log(`Buying ${quantity} tickets of tier ${tier.name}`);
    setIsTicketModalVisible(false);
    // Navigate to checkout or show success
  };

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      <EventHero image={event.image} />

      <EventHeader
        onBack={() => router.back()}
        isFavorite={isFavorite}
        onToggleFavorite={() => setIsFavorite(!isFavorite)}
      />

      <ScrollView
        className="flex-1 pt-[280px]"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <EventContent event={event} />
      </ScrollView>

      <EventActionBar onBuy={() => setIsTicketModalVisible(true)} />

      <TicketSelectionModal
        visible={isTicketModalVisible}
        onClose={() => setIsTicketModalVisible(false)}
        ticketTiers={event.ticketTiers || []}
        onBuy={handleBuyTicket}
      />
    </View>
  );
}
