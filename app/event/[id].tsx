import { supabase } from "@/lib/supabase";
import TicketSelectionModal from "@/src/components/TicketSelectionModal";
import { EventActionBar } from "@/src/components/event_details/EventActionBar";
import { EventContent } from "@/src/components/event_details/EventContent";
import { EventHeader } from "@/src/components/event_details/EventHeader";
import { EventHero } from "@/src/components/event_details/EventHero";
import { EVENTS } from "@/src/constants/mockData";
import { TicketTier } from "@/src/types/event";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar, View } from "react-native";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isTicketModalVisible, setIsTicketModalVisible] = useState(false);
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      // 1. Fetch from Supabase with joined ticket_tiers
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          ticket_tiers (*)
        `)
        .eq("id", id)
        .single();

      if (!error && data) {
        // Map DB fields to app structure if needed
        setEvent({
          ...data,
          image: data.image_url, // Map image_url to image prop
          organizer: data.organizer_name, // Map organizer_name to organizer prop
          isVerified: data.is_organizer_verified, // Map is_organizer_verified to isVerified prop
          ticketTiers: data.ticket_tiers.map((tier: any) => ({
            id: tier.id,
            name: tier.name,
            price: `$${tier.price.toFixed(2)}`, // Format price for display
            description: tier.description,
            available: tier.available_count,
            tierDesign: tier.tier_design, // Map DB column to prop
          })),
        });
      } else {
        // 2. Fallback to mock data (legacy support for old IDs)
        if (EVENTS[id as keyof typeof EVENTS]) {
          setEvent(EVENTS[id as keyof typeof EVENTS]);
        }
      }
      setLoading(false);
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  const handleBuyTicket = (tier: TicketTier, quantity: number) => {
    console.log(
      `Buying ${quantity} tickets of tier ${tier.name} with design ${tier.tierDesign}`,
    );
    setIsTicketModalVisible(false);
    // Navigate to checkout or show success
  };

  if (loading) {
    return (
      <View className="flex-1 bg-background justify-center items-center">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  // Fallback if event not found
  if (!event) {
    return (
      <View className="flex-1 bg-background justify-center items-center">
        <StatusBar barStyle="light-content" />
        <EventHeader
          onBack={() => router.back()}
          isFavorite={false}
          onToggleFavorite={() => {}}
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      <EventHeader
        onBack={() => router.back()}
        isFavorite={isFavorite}
        onToggleFavorite={() => setIsFavorite(!isFavorite)}
      />

      <EventHero image={event.image} />

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
