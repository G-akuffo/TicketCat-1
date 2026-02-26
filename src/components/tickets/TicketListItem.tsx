import {
  Award,
  ChevronRight,
  Info,
  Send,
  ShieldCheck,
  Tag,
  Zap,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

const TIERS = {
  GOLD: {
    mainColor: "#D4AF37",
    icon: ShieldCheck,
  },
  ROYAL: {
    mainColor: "#8B5CF6",
    icon: Send,
  },
  SILVER: {
    mainColor: "#C0C0C0",
    icon: Zap,
  },
  BRONZE: {
    mainColor: "#CD7F32",
    icon: Award,
  },
  GENERAL: {
    mainColor: "#444444",
    icon: Info,
  },
};

interface TicketListItemProps {
  id: string;
  title: string;
  tierDesign: string;
  date: string;
  time: string;
  onPress: () => void;
}

export const TicketListItem = ({
  id,
  title,
  tierDesign,
  date,
  time,
  onPress,
}: TicketListItemProps) => {
  return (
    <View
      className="rounded-[14px] mb-6 border-l-[5px] bg-surface-raised overflow-hidden border border-border-elevated"
      style={{
        borderLeftColor:
          TIERS[tierDesign as keyof typeof TIERS]?.mainColor ||
          TIERS.GENERAL.mainColor,
      }}
    >
      <Pressable
        className="h-20 px-5 flex-row items-center justify-between"
        onPress={onPress}
      >
        <View className="gap-1">
          <Text className="text-txt-main text-[13px] font-extrabold">
            {title}
          </Text>
          <Text className="text-txt-ghost text-[10px] font-bold">
            {date} • {time}
          </Text>
        </View>
        <ChevronRight color="#222" size={20} />
      </Pressable>

      {/* ACTION BAR */}
      <View className="flex-row h-12 p-1.5 gap-1.5 bg-surface">
        <Pressable
          className="flex-1 flex-row items-center justify-center rounded-[10px] gap-2 bg-surface-highlight border border-border-highlight"
          onPress={() => console.log("Transfer")}
        >
          <Send color="#ccc" size={14} />
          <Text className="text-[#ccc] text-[10px] font-black tracking-[1px]">
            TRANSFER
          </Text>
        </Pressable>

        <Pressable
          className="flex-1 flex-row items-center justify-center rounded-[10px] gap-2 bg-[#080808] border border-[#391818ff]"
          onPress={() => console.log("Sell")}
        >
          <Tag color="#888" size={14} />
          <Text className="text-txt-muted text-[10px] font-black tracking-[1px]">
            SELL
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
