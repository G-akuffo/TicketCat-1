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
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CategoryButtons from "@/src/components/CategoryButtons";
import TicketModal from "@/src/components/ticket/TicketModal";

const { width } = Dimensions.get("window");

const TIERS = {
  GOLD: {
    main: "#D4AF37",
    accent: "#00FF88",
    label: "PRIORITY ENTRY ACTIVE",
    sub: "VVIP",
    icon: ShieldCheck,
  },
  SILVER: {
    main: "#C0C0C0",
    accent: "#00A3FF",
    label: "SILVER PRIORITY ACCESS",
    sub: "VIP",
    icon: Zap,
  },
  BRONZE: {
    main: "#CD7F32",
    accent: "#FF7F50",
    label: "BRONZE ACCESS TIER",
    sub: "PREMIUM",
    icon: Award,
  },
  GENERAL: {
    main: "#444444",
    accent: "#FFFFFF",
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
    <View style={styles.container}>
      {/* --- STICKY HEADER --- */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerSubtitle}>MY</Text>
          <Text style={styles.headerTitle}>Tickets</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <QrCode size={18} color="white" />
        </TouchableOpacity>
      </View>

      <CategoryButtons />

      {/* --- MINIMIZED TICKETS LIST --- */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {tickets.map((t) => (
          <View
            key={t.id}
            style={[
              styles.minimizedContainer,
              { borderLeftColor: TIERS[t.tier as keyof typeof TIERS].main },
            ]}
          >
            <Pressable
              style={styles.minimizedRow}
              onPress={() => handleTicketPress(t)}
            >
              <View style={styles.rowInfo}>
                <Text style={styles.rowTitle}>{t.title}</Text>
                <Text style={styles.rowDate}>
                  {t.date} • {t.time}
                </Text>
              </View>
              <ChevronRight color="#222" size={20} />
            </Pressable>

            {/* ACTION BAR (Kept exactly as requested) */}
            <View style={styles.actionBar}>
              <Pressable
                style={[styles.actionButton, styles.transferBtn]}
                onPress={() => console.log("Transfer")}
              >
                <Send color="#ccc" size={14} />
                <Text style={styles.actionTextPop}>TRANSFER</Text>
              </Pressable>

              <Pressable
                style={[styles.actionButton, styles.sellBtn]}
                onPress={() => console.log("Sell")}
              >
                <Tag color="#888" size={14} />
                <Text style={[styles.actionTextPop, { color: "#888" }]}>
                  SELL
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
        <View style={{ height: 100 }} />
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 65, // Adjusted to match your other sticky headers
    paddingBottom: 20,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderColor: "#111",
  },
  headerTextContainer: { flex: 1 },
  headerSubtitle: {
    color: "#888",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },
  headerTitle: { color: "#fff", fontSize: 28, fontWeight: "900" },
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#0A0A0A",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1A1A1A",
  },

  scrollContent: { padding: 25, paddingTop: 30 },

  minimizedContainer: {
    borderRadius: 14,
    marginBottom: 24,
    borderLeftWidth: 5,
    backgroundColor: "#0A0A0A",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#111",
  },
  minimizedRow: {
    height: 80,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowInfo: { gap: 4 },
  rowTitle: { color: "#fff", fontSize: 13, fontWeight: "800" },
  rowDate: { color: "#3d3d3d", fontSize: 10, fontWeight: "700" },

  actionBar: {
    flexDirection: "row",
    height: 48,
    padding: 6,
    gap: 6,
    backgroundColor: "#050505",
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    gap: 8,
  },
  transferBtn: {
    backgroundColor: "#1A1A1A",
    borderWidth: 1,
    borderColor: "#333",
  },
  sellBtn: {
    backgroundColor: "#080808",
    borderWidth: 1,
    borderColor: "#391818ff",
  },
  actionTextPop: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#ccc",
  },
});
