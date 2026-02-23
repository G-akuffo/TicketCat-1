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
    price: "$2,550.00",
    seller: "OxAlpha",
    img: "https://images.unsplash.com/photo-1514525253344-a812df99a716?w=600",
  },
  {
    id: "2",
    title: "NEON MIDNIGHT",
    tier: "SILVER",
    price: "$1,260.00",
    seller: "CryptoCat",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
  },
  {
    id: "3",
    title: "SOLARIS FEST",
    tier: "GOLD",
    price: "$3,600.00",
    seller: "VipVault",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600",
  },
  {
    id: "4",
    title: "JAZZ EVENING",
    tier: "BRONZE",
    price: "$450.00",
    seller: "JazzFan99",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600",
  },
];

export default function MarketScreen() {
  return (
    <View className="flex-1 bg-background">
      {/* --- STICKY HEADER --- */}
      <View className="flex-row items-center px-6 pt-[60px] pb-5 bg-background border-b border-border-elevated">
        <View className="flex-1">
          <Text className="text-txt-muted text-[10px] font-extrabold tracking-[2px]">
            SECONDARY
          </Text>
          <Text className="text-txt-main text-[28px] font-black">Market</Text>
        </View>
        <TouchableOpacity className="w-[45px] h-[45px] rounded-[15px] bg-surface-raised justify-center items-center border border-surface-highlight">
          <Handshake size={18} color="white" />
        </TouchableOpacity>
      </View>

      <CategoryButtons />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TOP SEARCH BAR */}
        <View
          className="flex-row items-center px-6 pt-[60px] pb-5 gap-3"
          style={{ paddingTop: 25 }}
        >
          <View className="flex-1 h-[50px] bg-surface-raised rounded-[15px] border border-border-elevated flex-row items-center px-[15px] gap-[10px]">
            <Search color="#444" size={18} />
            <Text className="text-txt-ghost text-[13px] font-semibold">
              Search events or sellers...
            </Text>
          </View>
          <Pressable className="w-[50px] h-[50px] bg-surface-raised rounded-[15px] justify-center items-center border border-border-elevated">
            <Filter color="#fff" size={20} />
          </Pressable>
        </View>

        <View className="flex-row items-center px-[25px] mb-5 gap-[10px]">
          <Text className="text-txt-main text-xl font-black tracking-[-0.5px]">
            Live Listings
          </Text>
          <View className="w-2 h-2 rounded-full bg-status-success shadow-sm shadow-status-success opacity-80" />
        </View>

        {/* LISTINGS GRID */}
        <View className="px-5 flex-row flex-wrap justify-between">
          {MARKET_LISTINGS.map((item) => {
            const TierIcon = TIERS[item.tier as keyof typeof TIERS].icon;
            const tierColor = TIERS[item.tier as keyof typeof TIERS].color;

            return (
              <Pressable
                key={item.id}
                className="mb-[25px] bg-surface rounded-[24px] p-2 border border-surface-raised"
                style={{ width: (width - 55) / 2 }}
              >
                <ImageBackground
                  source={{ uri: item.img }}
                  className="h-[160px] w-full mb-3"
                  imageStyle={{ borderRadius: 20 }}
                >
                  <BlurView
                    intensity={30}
                    tint="dark"
                    className="absolute top-[10px] left-[10px] flex-row items-center gap-[5px] px-[10px] py-[6px] rounded-[12px] overflow-hidden"
                  >
                    <TierIcon color={tierColor} size={12} />
                    <Text
                      className="text-[9px] font-black tracking-[1px]"
                      style={{ color: tierColor }}
                    >
                      {item.tier}
                    </Text>
                  </BlurView>
                </ImageBackground>

                <View className="px-1">
                  <View className="flex-row justify-between items-center mb-3">
                    <Text
                      className="text-txt-main text-[13px] font-extrabold flex-1"
                      numberOfLines={1}
                    >
                      {item.title}
                    </Text>
                    <ArrowUpRight color="#444" size={16} />
                  </View>

                  <View className="mb-[15px]">
                    <Text className="text-txt-ghost text-[8px] font-black mb-[2px]">
                      SELLER
                    </Text>
                    <Text className="text-txt-muted text-[11px] font-bold">
                      {item.seller}
                    </Text>
                  </View>

                  <View className="flex-row justify-between items-center bg-surface-raised rounded-[12px] p-2">
                    <Text className="text-txt-main text-[12px] font-black">
                      {item.price}
                    </Text>
                    <View className="bg-surface-inverse px-[10px] py-[5px] rounded-lg">
                      <Text className="text-txt-inverted text-[9px] font-black">
                        BUY
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>

        <View className="h-[100px]" />
      </ScrollView>
    </View>
  );
}
