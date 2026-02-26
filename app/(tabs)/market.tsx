import CategoryButtons from "@/src/components/CategoryButtons";
import { LiveListingsHeader } from "@/src/components/market/LiveListingsHeader";
import { MarketHeader } from "@/src/components/market/MarketHeader";
import { MarketListingItem } from "@/src/components/market/MarketListingItem";
import { MarketSearchBar } from "@/src/components/market/MarketSearchBar";
import { MARKET_LISTINGS } from "@/src/constants/mockData";
import { ScrollView, View } from "react-native";

export default function MarketScreen() {
  return (
    <View className="flex-1 bg-background">
      {/* --- STICKY HEADER --- */}
      <MarketHeader />

      <CategoryButtons />

      <MarketSearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TOP SEARCH BAR */}

        <LiveListingsHeader />

        {/* LISTINGS GRID */}
        <View className="px-5 flex-row flex-wrap justify-between">
          {MARKET_LISTINGS.map((item) => (
            <MarketListingItem key={item.id} {...item} />
          ))}
        </View>

        <View className="h-[100px]" />
      </ScrollView>
    </View>
  );
}
