import {
  ArrowLeft,
  Bell,
  ChevronRight,
  CreditCard,
  Globe,
  HelpCircle,
  LogOut,
  ShieldCheck,
  Smartphone,
  User,
  Wallet,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const App = () => {
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(true);

  const sections = [
    {
      title: "Account",
      items: [
        {
          id: "profile",
          label: "Profile Information",
          icon: User,
          value: "John Doe",
        },
        {
          id: "payments",
          label: "Payment Methods",
          icon: CreditCard,
          value: "2 Cards",
        },
        {
          id: "wallet",
          label: "Crypto Wallet",
          icon: Wallet,
          value: "Connected",
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          id: "notifs",
          label: "Push Notifications",
          icon: Bell,
          type: "toggle",
          state: notifications,
          setter: setNotifications,
        },
        {
          id: "security",
          label: "Biometric Login",
          icon: ShieldCheck,
          type: "toggle",
          state: biometrics,
          setter: setBiometrics,
        },
        { id: "language", label: "Language", icon: Globe, value: "English" },
      ],
    },
    {
      title: "Support",
      items: [
        { id: "help", label: "Help Center", icon: HelpCircle },
        {
          id: "device",
          label: "Device Status",
          icon: Smartphone,
          value: "v2.4.0",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <TouchableOpacity style={styles.profileCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
            }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.d@market.app</Text>
          </View>
          <View style={styles.proBadge}>
            <Text style={styles.proText}>PRO</Text>
          </View>
        </TouchableOpacity>

        {/* Dynamic Sections */}
        {sections.map((section, idx) => (
          <View key={idx} style={styles.section}>
            <Text style={styles.sectionLabel}>{section.title}</Text>
            <View style={styles.listCard}>
              {section.items.map((item, itemIdx) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.7}
                  style={[
                    styles.listItem,
                    itemIdx !== section.items.length - 1 && styles.borderBottom,
                  ]}
                  onPress={() =>
                    item.type === "toggle" ? item.setter(!item.state) : null
                  }
                >
                  <View style={styles.itemLeft}>
                    <View style={styles.iconBox}>
                      <item.icon size={20} color="#888" />
                    </View>
                    <Text style={styles.itemLabel}>{item.label}</Text>
                  </View>

                  <View style={styles.itemRight}>
                    {item.type === "toggle" ? (
                      <Switch
                        value={item.state}
                        onValueChange={item.setter}
                        trackColor={{ false: "#333", true: "#fff" }}
                        thumbColor={item.state ? "#000" : "#888"}
                        ios_backgroundColor="#1a1a1a"
                      />
                    ) : (
                      <View style={styles.valueRow}>
                        {item.value && (
                          <Text style={styles.itemValue}>{item.value}</Text>
                        )}
                        <ChevronRight size={18} color="#444" />
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Sign Out */}
        <TouchableOpacity style={styles.signOutBtn}>
          <LogOut size={18} color="#ff4444" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

        <View style={styles.footerInfo}>
          <Text style={styles.versionText}>Market App v2.4.0 (Build 892)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#0a0a0a",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1a1a1a",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0a0a0a",
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#111",
    marginVertical: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 18,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  profileEmail: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  proBadge: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  proText: {
    color: "#000000",
    fontSize: 11,
    fontWeight: "900",
  },
  section: {
    marginBottom: 25,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#444",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginLeft: 4,
    marginBottom: 12,
  },
  listCard: {
    backgroundColor: "#0a0a0a",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#111",
    overflow: "hidden",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#161616",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  itemLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: "#eee",
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemValue: {
    fontSize: 14,
    color: "#555",
    marginRight: 8,
  },
  signOutBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#1a1a1a",
    marginTop: 10,
    backgroundColor: "transparent",
  },
  signOutText: {
    color: "#ff4444",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 10,
  },
  footerInfo: {
    marginTop: 40,
    alignItems: "center",
  },
  versionText: {
    fontSize: 12,
    color: "#222",
  },
});

export default App;
