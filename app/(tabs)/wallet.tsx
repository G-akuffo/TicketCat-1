import { BalanceCard } from "@/src/components/wallet/BalanceCard";
import { QuickActions } from "@/src/components/wallet/QuickActions";
import { RecentTransactions } from "@/src/components/wallet/RecentTransactions";
import { WalletHeader } from "@/src/components/wallet/WalletHeader";
import { ScrollView, View } from "react-native";

export default function WalletScreen() {
  return (
    <View className="flex-1 bg-background">
      <WalletHeader />

      <View className="px-6 pt-8 pb-4">
        {/* Header Section */}
        <BalanceCard />

        {/* Quick Actions */}
        <QuickActions />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 25, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Recent Transactions List */}
        <RecentTransactions />
      </ScrollView>
    </View>
  );
}
