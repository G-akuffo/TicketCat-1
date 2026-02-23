import {
  Award,
  ChevronRight,
  Info,
  QrCode,
  Send,
  ShieldCheck,
  Tag,
  Zap,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CategoryButtons from "@/src/components/CategoryButtons";
import TicketModal from "@/src/components/ticket/TicketModal";

const { width } = Dimensions.get("window");

const TIERS = {
  GOLD: {
    main: "border-l-gold", // For borderLeftColor logic, we might need dynamic styles or a mapping
    mainColor: "#D4AF37", // Keeping hex for dynamic border style if needed, or map to class
    accent: "text-gold-accent",
    label: "PRIORITY ENTRY ACTIVE",
    sub: "VVIP",
    icon: ShieldCheck,
  },
  SILVER: {
    main: "border-l-silver",
    mainColor: "#C0C0C0",
    accent: "text-silver-accent",
    label: "SILVER PRIORITY ACCESS",
    sub: "VIP",
    icon: Zap,
  },
  BRONZE: {
    main: "border-l-bronze",
    mainColor: "#CD7F32",
    accent: "text-bronze-accent",
    label: "BRONZE ACCESS TIER",
    sub: "PREMIUM",
    icon: Award,
  },
  GENERAL: {
    main: "border-l-general",
    mainColor: "#444444",
    accent: "text-general-accent",
    label: "GENERAL ADMISSION",
    sub: "REGULAR",
    icon: Info,
  },
};

export default function TicketsScreen() {
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const tickets = [
    {
      id: "1",
      title: "GHANA VS NIGERIA",
      tier: "GOLD",
      date: "AUG 24, 2026",
      time: "19:00 GMT",
    },
    {
      id: "2",
      title: "PADEL RAVE",
      tier: "SILVER",
      date: "AUG 24, 2026",
      time: "14:00 GMT",
    },
    {
      id: "3",
      title: "THE GARDEN GALA: EVENING OF JAZZ",
      tier: "BRONZE",
      date: "AUG 24, 2026",
      time: "17:00 GMT",
    },
    {
      id: "4",
      title: "BHIM CONCERT",
      tier: "GENERAL",
      date: "AUG 24, 2026",
      time: "20:00 GMT",
    },
  ];

  const handleTicketPress = (ticket: any) => {
    setSelectedTicket(ticket);
    setModalVisible(true);
  };

  return (
    <View className="flex-1 bg-background">
      {/* --- STICKY HEADER --- */}
      <View className="flex-row items-center px-6 pt-[65px] pb-5 bg-background border-b border-border-elevated">
        <View className="flex-1">
          <Text className="text-txt-muted text-[10px] font-extrabold tracking-[2px]">
            MY
          </Text>
          <Text className="text-txt-main text-[28px] font-black">Tickets</Text>
        </View>
        <TouchableOpacity className="w-[45px] h-[45px] rounded-[15px] bg-surface-raised justify-center items-center border border-surface-highlight">
          <QrCode size={18} color="white" />
        </TouchableOpacity>
      </View>

      <CategoryButtons />

      {/* --- MINIMIZED TICKETS LIST --- */}
      <ScrollView contentContainerStyle={{ padding: 25, paddingTop: 30 }}>
        {tickets.map((t) => (
          <View
            key={t.id}
            className="rounded-[14px] mb-6 border-l-[5px] bg-surface-raised overflow-hidden border border-border-elevated"
            style={{
              borderLeftColor: TIERS[t.tier as keyof typeof TIERS].mainColor,
            }}
          >
            <Pressable
              className="h-20 px-5 flex-row items-center justify-between"
              onPress={() => handleTicketPress(t)}
            >
              <View className="gap-1">
                <Text className="text-txt-main text-[13px] font-extrabold">
                  {t.title}
                </Text>
                <Text className="text-txt-ghost text-[10px] font-bold">
                  {t.date} • {t.time}
                </Text>
              </View>
              <ChevronRight color="#222" size={20} />
            </Pressable>

            {/* ACTION BAR (Kept exactly as requested) */}
            <View className="flex-row h-12 p-1.5 gap-1.5 bg-surface">
              <Pressable
                className="flex-1 flex-row items-center justify-center rounded-[10px] gap-2 bg-surface-highlight border border-border-highlight"
                onPress={() => console.log("Transfer")}
              >
                <Send color="#ccc" size={14} />
                <Text className="text-[#ccc] text-[10px] font-black tracking-[1px]">
                  TRANSFER
                </Text>
              </Pressable>

              <Pressable
                className="flex-1 flex-row items-center justify-center rounded-[10px] gap-2 bg-[#080808] border border-[#391818ff]"
                onPress={() => console.log("Sell")}
              >
                <Tag color="#888" size={14} />
                <Text className="text-txt-muted text-[10px] font-black tracking-[1px]">
                  SELL
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
        <View className="h-[100px]" />
      </ScrollView>

      {/* --- NEW EXTERNAL ENLARGED MODAL --- */}
      <TicketModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        ticketData={selectedTicket}
      />
    </View>
  );
}
