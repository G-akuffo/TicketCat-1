import { AnimatedTabBar } from "@/src/components/navigation/AnimatedTabBar";
import { TabIcon } from "@/src/components/navigation/TabIcon";
import { Tabs } from "expo-router";
import {
  Cog,
  LayoutGrid,
  ShoppingBag,
  Tickets,
  Wallet,
} from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <AnimatedTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: (props) => <TabIcon icon={LayoutGrid} {...props} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: (props) => <TabIcon icon={Wallet} {...props} />,
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          tabBarIcon: (props) => <TabIcon icon={Tickets} {...props} />,
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          tabBarIcon: (props) => <TabIcon icon={ShoppingBag} {...props} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: (props) => <TabIcon icon={Cog} {...props} />,
        }}
      />
    </Tabs>
  );
}
