import CategoryButtons from "@/src/components/CategoryButtons";
import { BlurView } from "expo-blur";
import {
  ArrowUpRight,
  Award,
  Filter,
  Handshake,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const TIERS = {
  GOLD: { color: "#D4AF37", icon: ShieldCheck },
  SILVER: { color: "#C0C0C0", icon: Zap },
  BRONZE: { color: "#CD7F32", icon: Award },
};

const MARKET_LISTINGS = [
  {
    id: "1",
    title: "GARDEN GALA",
    tier: "GOLD",
    price: "0.85 ETH",
    seller: "OxAlpha",
    img: "https://images.unsplash.com/photo-1514525253344-a812df99a716?w=600",
  },
  {
    id: "2",
    title: "NEON MIDNIGHT",
    tier: "SILVER",
    price: "0.42 ETH",
    seller: "CryptoCat",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
  },
  {
    id: "3",
    title: "SOLARIS FEST",
    tier: "GOLD",
    price: "1.20 ETH",
    seller: "VipVault",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600",
  },
  {
    id: "4",
    title: "JAZZ EVENING",
    tier: "BRONZE",
    price: "0.15 ETH",
    seller: "JazzFan99",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600",
  },
];

export default function MarketScreen() {
  return (
    <View style={styles.container}>
      {/* --- STICKY HEADER --- */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerSubtitle}>SECONDARY</Text>
          <Text style={styles.headerTitle}>Market</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Handshake size={18} color="white" />
        </TouchableOpacity>
      </View>

      <CategoryButtons />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TOP SEARCH BAR */}
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <Search color="#444" size={18} />
            <Text style={styles.searchText}>Search events or sellers...</Text>
          </View>
          <Pressable style={styles.filterBtn}>
            <Filter color="#fff" size={20} />
          </Pressable>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Live Listings</Text>
          <View style={styles.activePulse} />
        </View>

        {/* LISTINGS GRID */}
        <View style={styles.grid}>
          {MARKET_LISTINGS.map((item) => {
            const TierIcon = TIERS[item.tier as keyof typeof TIERS].icon;
            const tierColor = TIERS[item.tier as keyof typeof TIERS].color;

            return (
              <Pressable key={item.id} style={styles.listingCard}>
                <ImageBackground
                  source={{ uri: item.img }}
                  style={styles.listingImage}
                  imageStyle={{ borderRadius: 20 }}
                >
                  <BlurView intensity={30} tint="dark" style={styles.tierBadge}>
                    <TierIcon color={tierColor} size={12} />
                    <Text style={[styles.tierText, { color: tierColor }]}>
                      {item.tier}
                    </Text>
                  </BlurView>
                </ImageBackground>

                <View style={styles.listingInfo}>
                  <View style={styles.titleRow}>
                    <Text style={styles.title} numberOfLines={1}>
                      {item.title}
                    </Text>
                    <ArrowUpRight color="#444" size={16} />
                  </View>

                  <View style={styles.sellerRow}>
                    <Text style={styles.sellerLabel}>SELLER</Text>
                    <Text style={styles.sellerName}>{item.seller}</Text>
                  </View>

                  <View style={styles.priceContainer}>
                    <Text style={styles.priceValue}>{item.price}</Text>
                    <View style={styles.buyBtn}>
                      <Text style={styles.buyBtnText}>BUY</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: { flexDirection: "row", padding: 25, paddingTop: 60, gap: 12 },
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

  searchBar: {
    flex: 1,
    height: 50,
    backgroundColor: "#0A0A0A",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#111",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 10,
  },
  searchText: { color: "#444", fontSize: 13, fontWeight: "600" },
  filterBtn: {
    width: 50,
    height: 50,
    backgroundColor: "#0A0A0A",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#111",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 20,
    gap: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  activePulse: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00FF88",
    shadowColor: "#00FF88",
    shadowRadius: 6,
    shadowOpacity: 0.8,
  },

  grid: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listingCard: {
    width: (width - 55) / 2,
    marginBottom: 25,
    backgroundColor: "#050505",
    borderRadius: 24,
    padding: 8,
    borderWidth: 1,
    borderColor: "#0A0A0A",
  },
  listingImage: { height: 160, width: "100%", marginBottom: 12 },
  tierBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    overflow: "hidden",
  },
  tierText: { fontSize: 9, fontWeight: "900", letterSpacing: 1 },

  listingInfo: { paddingHorizontal: 4 },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: { color: "#fff", fontSize: 13, fontWeight: "800", flex: 1 },

  sellerRow: { marginBottom: 15 },
  sellerLabel: {
    color: "#222",
    fontSize: 8,
    fontWeight: "900",
    marginBottom: 2,
  },
  sellerName: { color: "#888", fontSize: 11, fontWeight: "700" },

  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0A0A0A",
    borderRadius: 12,
    padding: 8,
  },
  priceValue: { color: "#fff", fontSize: 12, fontWeight: "900" },
  buyBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  buyBtnText: { color: "#000", fontSize: 9, fontWeight: "900" },
});
