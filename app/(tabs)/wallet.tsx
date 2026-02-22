import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  History,
  Landmark,
  Plus,
} from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      {/* --- STICKY HEADER --- */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Wallet</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Landmark size={18} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Your Balance</Text>
          <Text style={styles.balance}>$1,240.50</Text>
        </View>

        {/* The "Main" Bento Card (Glassmorphic Credit Card) */}
        <LinearGradient colors={["#252525", "#121212"]} style={styles.mainCard}>
          <View style={styles.cardTop}>
            <CreditCard color="#fff" size={24} />
            <Text style={styles.cardType}>Premium Pass</Text>
          </View>
          <View style={styles.cardBottom}>
            <Text style={styles.cardNumber}>**** **** **** 8842</Text>
            <View style={styles.expRow}>
              <Text style={styles.expLabel}>EXP 12/28</Text>
              <View style={styles.nfcCircle} />
            </View>
          </View>
          {/* Decorative Glow */}
          <View style={styles.glowEffect} />
        </LinearGradient>

        {/* Quick Actions Bento Row */}
        <View style={styles.bentoRow}>
          <BlurView
            intensity={20}
            tint="dark"
            style={[styles.bentoSquare, styles.glassBorder]}
          >
            <Pressable style={styles.actionButton}>
              <Plus color="#fff" size={20} />
              <Text style={styles.actionText}>Top Up</Text>
            </Pressable>
          </BlurView>

          <BlurView
            intensity={20}
            tint="dark"
            style={[styles.bentoSquare, styles.glassBorder]}
          >
            <Pressable style={styles.actionButton}>
              <History color="#fff" size={20} />
              <Text style={styles.actionText}>History</Text>
            </Pressable>
          </BlurView>
        </View>

        {/* Recent Transactions List */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        {[
          {
            id: 1,
            title: "Music Festival 2026",
            price: "-$150.00",
            icon: ArrowUpRight,
            color: "#ff4d4d",
          },
          {
            id: 2,
            title: "Wallet Top Up",
            price: "+$500.00",
            icon: ArrowDownLeft,
            color: "#4dff88",
          },
          {
            id: 3,
            title: "Art Gallery Entry",
            price: "-$45.00",
            icon: ArrowUpRight,
            color: "#ff4d4d",
          },
        ].map((item) => (
          <BlurView
            key={item.id}
            intensity={10}
            tint="dark"
            style={styles.transactionItem}
          >
            <View style={styles.txLeft}>
              <item.icon color={item.color} size={20} />
              <Text style={styles.txTitle}>{item.title}</Text>
            </View>
            <Text
              style={[
                styles.txPrice,
                { color: item.price.startsWith("+") ? "#4dff88" : "#fff" },
              ]}
            >
              {item.price}
            </Text>
          </BlurView>
        ))}

        {/* Padding for the floating tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  container: { flex: 1, backgroundColor: "#000" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 60, // Space for status bar
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
  greeting: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 16,
    fontWeight: "500",
  },
  balance: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "700",
    marginTop: 5,
  },
  mainCard: {
    width: "100%",
    height: 200,
    borderRadius: 24,
    padding: 24,
    justifyContent: "space-between",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardType: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1,
  },
  cardNumber: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 10,
  },
  expRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  expLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
  },
  nfcCircle: {
    width: 30,
    height: 20,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  glowEffect: {
    position: "absolute",
    top: -50,
    right: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  bentoRow: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },
  bentoSquare: {
    flex: 1,
    height: 100,
    borderRadius: 20,
    overflow: "hidden",
  },
  glassBorder: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  actionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    overflow: "hidden",
  },
  txLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  txTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  txPrice: {
    fontSize: 14,
    fontWeight: "600",
  },
});
