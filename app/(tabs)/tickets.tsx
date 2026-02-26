import CategoryButtons from "@/src/components/CategoryButtons";
import TicketModal from "@/src/components/ticket/TicketModal";
import { TicketListItem } from "@/src/components/tickets/TicketListItem";
import { TicketsHeader } from "@/src/components/tickets/TicketsHeader";
import { MY_TICKETS } from "@/src/constants/mockData";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function TicketsScreen() {
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTicketPress = (ticket: any) => {
    setSelectedTicket(ticket);
    setModalVisible(true);
  };

  return (
    <View className="flex-1 bg-background">
      {/* --- STICKY HEADER --- */}
      <TicketsHeader />

      <CategoryButtons />

      {/* --- MINIMIZED TICKETS LIST --- */}
      <ScrollView contentContainerStyle={{ padding: 25, paddingTop: 30 }}>
        {MY_TICKETS.map((t) => (
          <TicketListItem
            key={t.id}
            {...t}
            onPress={() => handleTicketPress(t)}
          />
        ))}
        <View className="h-[100px]" />
      </ScrollView>

      {/* --- EXTERNAL ENLARGED MODAL --- */}
      <TicketModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        ticketData={selectedTicket}
      />
    </View>
  );
}
