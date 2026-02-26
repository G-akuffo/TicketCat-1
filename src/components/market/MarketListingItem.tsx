import { BlurView } from "expo-blur";
import { ArrowUpRight, Award, ShieldCheck, Zap } from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const TIERS = {
  GOLD: { color: "#D4AF37", icon: ShieldCheck },
  SILVER: { color: "#C0C0C0", icon: Zap },
  BRONZE: { color: "#CD7F32", icon: Award },
};

interface MarketListingItemProps {
  id: string;
  title: string;
  tierDesign: string;
  price: string;
  seller: string;
  img: string;
}

export const MarketListingItem = ({
  id,
  title,
  tierDesign,
  price,
  seller,
  img,
}: MarketListingItemProps) => {
  const TierIcon =
    TIERS[tierDesign as keyof typeof TIERS]?.icon || TIERS.BRONZE.icon;
  const tierColor =
    TIERS[tierDesign as keyof typeof TIERS]?.color || TIERS.BRONZE.color;

  return (
    <Pressable
      className="mb-[25px] bg-surface rounded-[24px] p-2 border border-surface-raised"
      style={{ width: (width - 55) / 2 }}
    >
      <ImageBackground
        source={{ uri: img }}
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
            {tierDesign}
          </Text>
        </BlurView>
      </ImageBackground>

      <View className="px-1">
        <View className="flex-row justify-between items-center mb-3">
          <Text
            className="text-txt-main text-[13px] font-extrabold flex-1"
            numberOfLines={1}
          >
            {title}
          </Text>
          <ArrowUpRight color="#444" size={16} />
        </View>

        <View className="mb-[15px]">
          <Text className="text-txt-ghost text-[8px] font-black mb-[2px]">
            SELLER
          </Text>
          <Text className="text-txt-muted text-[11px] font-bold">{seller}</Text>
        </View>

        <View className="flex-row justify-between items-center bg-surface-raised rounded-[12px] p-2">
          <Text className="text-txt-main text-[12px] font-black">{price}</Text>
          <View className="bg-surface-inverse px-[10px] py-[5px] rounded-lg">
            <Text className="text-txt-inverted text-[9px] font-black">BUY</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
