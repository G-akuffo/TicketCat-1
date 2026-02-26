import { ListItem } from "@/src/components/ListItem";
import { EmptyBookmarks } from "@/src/components/profile/EmptyBookmarks";
import { ProfileCard } from "@/src/components/profile/ProfileCard";
import { SettingsSection } from "@/src/components/profile/SettingsSection";
import { SignOutButton } from "@/src/components/profile/SignOutButton";
import { TabSwitcher } from "@/src/components/profile/TabSwitcher";
import { BOOKMARKED_EVENTS } from "@/src/constants/mockData";
import {
  Bell,
  CreditCard,
  Globe,
  HelpCircle,
  ShieldCheck,
  Smartphone,
  User,
  Wallet,
} from "lucide-react-native";
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

const App = () => {
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(true);
  const [activeTab, setActiveTab] = useState("settings");

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
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="flex-row items-center justify-center px-5 py-[15px] mt-10">
        <Text className="text-lg font-bold text-white">Profile</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        <ProfileCard />

        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "settings" ? (
          <>
            {sections.map((section, idx) => (
              <SettingsSection
                key={idx}
                title={section.title}
                items={section.items}
              />
            ))}
            <SignOutButton />
          </>
        ) : (
          <View className="gap-4">
            {BOOKMARKED_EVENTS.length > 0 ? (
              BOOKMARKED_EVENTS.map((event) => (
                <ListItem key={event.id} {...event} />
              ))
            ) : (
              <EmptyBookmarks />
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
