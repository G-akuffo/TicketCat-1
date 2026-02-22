import CategoryButtons from "@/src/components/CategoryButtons";
import {
  Bell,
  Calendar,
  ChevronRight,
  MapPin,
  Search,
} from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

// --- FIXED SUB-COMPONENTS ---

const EventCard = ({ title, location, date, category }: any) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.cardContainer}>
    <View style={styles.cardImagePlaceholder}>
      <View style={styles.categoryBadge}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
    <View style={styles.cardFooter}>
      <View style={styles.footerItem}>
        <Calendar size={12} color="#71717a" />
        <Text style={styles.footerText}>{date}</Text>
      </View>
      <View style={styles.footerItem}>
        <MapPin size={12} color="#71717a" />
        <Text style={styles.footerText}>{location}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const ListItem = ({ title, location, time }: any) => (
  <TouchableOpacity activeOpacity={0.7} style={styles.listItem}>
    <View style={styles.listImagePlaceholder} />
    <View style={styles.listContent}>
      <Text style={styles.listTime}>{time}</Text>
      <Text style={styles.listTitle}>{title}</Text>
      <View style={styles.footerItem}>
        <MapPin size={10} color="#71717a" />
        <Text style={styles.listLocation}>{location}</Text>
      </View>
    </View>
    <View style={styles.listArrow}>
      <ChevronRight size={18} color="#000" />
    </View>
  </TouchableOpacity>
);

// --- MAIN SCREEN ---

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* STICKY HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSub}>Explore</Text>
          <Text style={styles.headerTitle}>Events</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={22} color="#a1a1aa" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={22} color="#a1a1aa" />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <CategoryButtons />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredContent}
        >
          <EventCard
            title="The Afrofuture Gala"
            location="Labadi Beach"
            date="Dec 28"
            category="MUSIC"
          />
          <EventCard
            title="Polo Invitational"
            location="Accra Polo Club"
            date="Jan 05"
            category="SPORTS"
          />
        </ScrollView>

        <View style={styles.listSection}>
          <Text style={styles.sectionTitle}>Happening Soon</Text>
          <ListItem
            title="Tech Summit Accra"
            location="Movenpick Hotel"
            time="TOMORROW"
          />
          <ListItem
            title="Sip & Paint Night"
            location="Cantonments"
            time="FRI, 19:00"
          />
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 65,
    paddingBottom: 20,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderColor: "#111",
  },
  headerSub: { color: "#71717a", fontSize: 14, fontWeight: "500" },
  headerTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: -1,
  },
  headerIcons: { flexDirection: "row", gap: 12 },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#0a0a0a",
    borderWidth: 1,
    borderColor: "#18181b",
    justifyContent: "center",
    alignItems: "center",
  },
  notifDot: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
  },
  scrollContent: { paddingTop: 20 },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: { color: "#fff", fontSize: 20, fontWeight: "700" },
  seeAll: { color: "#71717a", fontSize: 14 },
  featuredContent: { paddingHorizontal: 20, gap: 20 },
  cardContainer: { width: 280 },
  cardImagePlaceholder: {
    height: 200,
    borderRadius: 28,
    backgroundColor: "#0a0a0a",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#18181b",
    overflow: "hidden",
  },
  categoryBadge: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: { color: "#000", fontSize: 10, fontWeight: "800" },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  cardFooter: { flexDirection: "row", gap: 12 },
  footerItem: { flexDirection: "row", alignItems: "center", gap: 4 },
  footerText: { color: "#71717a", fontSize: 12 },
  listSection: { marginTop: 35, paddingHorizontal: 20 },
  listItem: {
    flexDirection: "row",
    backgroundColor: "#0a0a0a",
    borderRadius: 24,
    padding: 12,
    alignItems: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#18181b",
  },
  listImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#18181b",
  },
  listContent: { flex: 1, paddingHorizontal: 15 },
  listTime: {
    color: "#71717a",
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 2,
  },
  listTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  listLocation: { color: "#71717a", fontSize: 10 },
  listArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
