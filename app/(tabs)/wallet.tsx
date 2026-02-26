import { BalanceCard } from "@/src/components/wallet/BalanceCard";
import { QuickActions } from "@/src/components/wallet/QuickActions";
import { RecentTransactions } from "@/src/components/wallet/RecentTransactions";
import { WalletHeader } from "@/src/components/wallet/WalletHeader";
import { ScrollView, View } from "react-native";

export default function WalletScreen() {
  return (
    <View className="flex-1 bg-background">
      <WalletHeader />

      <ScrollView
        contentContainerStyle={{ padding: 25, paddingTop: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <BalanceCard />

        {/* Quick Actions */}
        <QuickActions />

        {/* Recent Transactions List */}
        <RecentTransactions />

        {/* Padding for the floating tab bar */}
        <View className="h-[100px]" />
      </ScrollView>
    </View>
  );
}
