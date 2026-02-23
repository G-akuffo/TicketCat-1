import { usePreventScreenCapture } from "expo-screen-capture";
import {
  Calendar,
  Clock,
  DoorOpen,
  MapPin,
  RefreshCcw,
  ShieldAlert,
  X,
} from "lucide-react-native";
import React, { useEffect } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const TIERS = {
  GOLD: { main: "#D4AF37", accent: "#00FF88", label: "VVIP" },
  SILVER: {
    main: "#C0C0C0",
    accent: "#00A3FF",
    label: "VIP",
  },
  BRONZE: { main: "#CD7F32", accent: "#FF7F50", label: "PREMIUM" },
  GENERAL: { main: "#444444", accent: "#FFFFFF", label: "REGULAR" },
};

const TicketModal = ({ visible, onClose, ticketData }: any) => {
  usePreventScreenCapture();

  // Animations
  const pulse = useSharedValue(1);
  const rotate = useSharedValue(0);

  const [token, setToken] = React.useState(Date.now());

  useEffect(() => {
    pulse.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1000 }),
        withTiming(1, { duration: 1000 }),
      ),
      -1,
      true,
    );
    rotate.value = withRepeat(withTiming(360, { duration: 4000 }), -1, false);

    const interval = setInterval(() => {
      setToken(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const animatedPulse = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
  }));

  const animatedRotate = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
  }));

  if (!ticketData) return null;

  // Map tier strings to our new Tailwind semantic colors
  const tierColorMap = {
    GOLD: {
      main: "text-gold",
      border: "border-gold",
      accent: "text-gold-accent",
      icon: "#00FF88",
    },
    SILVER: {
      main: "text-silver",
      border: "border-silver",
      accent: "text-silver-accent",
      icon: "#00A3FF",
    },
    BRONZE: {
      main: "text-bronze",
      border: "border-bronze",
      accent: "text-bronze-accent",
      icon: "#FF7F50",
    },
    GENERAL: {
      main: "text-general",
      border: "border-general",
      accent: "text-general-accent",
      icon: "#FFFFFF",
    },
  };

  const tier = TIERS[ticketData.tier as keyof typeof TIERS];
  const tierColors =
    tierColorMap[ticketData.tier as keyof typeof tierColorMap] ||
    tierColorMap.GENERAL;

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View className="flex-1 bg-background/90 justify-center items-center">
        <View className="w-[90%]">
          {/* TICKET CONTAINER WITH NOSTALGIC SHAPE */}
          <View className="overflow-hidden">
            {/* TOP STUB SECTION */}
            <View
              className={`bg-surface rounded-t-[20px] p-6 items-center border-x border-t relative ${tierColors.border}`}
            >
              {/* HOLOGRAPHIC/DYNAMIC BG EFFECT */}
              <View className="absolute inset-0 bg-white/5 opacity-20" />

              <View className="mb-4">
                <Text
                  className={`text-xs font-black tracking-[3px] ${tierColors.main}`}
                >
                  {tier.label} ADMISSION
                </Text>
              </View>

              {/* PULSING QR CODE CONTAINER */}
              <Animated.View
                style={animatedPulse}
                className="bg-white p-4 rounded-xl shadow-lg shadow-white/20"
              >
                <View className="flex-row flex-wrap w-40 h-40 gap-1">
                  {[...Array(25)].map((_, i) => (
                    <View
                      key={i}
                      className="w-7 h-7 rounded-[2px]"
                      style={{
                        backgroundColor:
                          Math.random() > 0.4 ? "#000" : "transparent",
                      }}
                    />
                  ))}
                </View>
              </Animated.View>

              <View className="flex-row items-center gap-2 mt-5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                <Animated.View style={animatedRotate}>
                  <RefreshCcw color={tierColors.icon} size={10} />
                </Animated.View>
                <Text
                  className={`text-[9px] font-extrabold ${tierColors.accent}`}
                >
                  LIVE TOKEN ACTIVE
                </Text>
              </View>
            </View>

            {/* PERFORATED TEAR LINE */}
            <View className="h-6 bg-background flex-row items-center justify-between -mx-3 z-10">
              <View
                className={`w-6 h-6 rounded-full bg-background/90 border-r -ml-3 ${tierColors.border}`}
              />
              <View className="flex-1 h-[2px] border-b-2 border-dashed border-white/20 mx-2" />
              <View
                className={`w-6 h-6 rounded-full bg-background/90 border-l -mr-3 ${tierColors.border}`}
              />
            </View>

            {/* BOTTOM DETAILS SECTION */}
            <View
              className={`bg-surface rounded-b-[20px] p-6 pt-2 border-x border-b ${tierColors.border}`}
            >
              <Text className="text-2xl font-black mb-6 text-txt-dim text-center uppercase tracking-tighter">
                {ticketData.title}
              </Text>

              <View className="gap-4">
                <View className="flex-row justify-between border-b border-white/5 pb-3">
                  <View className="gap-1">
                    <Text className="text-txt-muted text-[10px] uppercase font-bold tracking-widest">
                      Date
                    </Text>
                    <View className="flex-row items-center gap-1.5">
                      <Calendar size={12} color="#888" />
                      <Text className="text-txt-main font-mono font-bold">
                        {ticketData.date}
                      </Text>
                    </View>
                  </View>
                  <View className="gap-1 items-end">
                    <Text className="text-txt-muted text-[10px] uppercase font-bold tracking-widest">
                      Time
                    </Text>
                    <View className="flex-row items-center gap-1.5">
                      <Clock size={12} color="#888" />
                      <Text className="text-txt-main font-mono font-bold">
                        {ticketData.time}
                      </Text>
                    </View>
                  </View>
                </View>

                <View className="flex-row justify-between border-b border-white/5 pb-3">
                  <View className="gap-1">
                    <Text className="text-txt-muted text-[10px] uppercase font-bold tracking-widest">
                      Venue
                    </Text>
                    <View className="flex-row items-center gap-1.5">
                      <MapPin size={12} color="#888" />
                      <Text className="text-txt-main font-bold">
                        Labadi Beach
                      </Text>
                    </View>
                  </View>
                  <View className="gap-1 items-end">
                    <Text className="text-txt-muted text-[10px] uppercase font-bold tracking-widest">
                      Gate
                    </Text>
                    <View className="flex-row items-center gap-1.5">
                      <DoorOpen size={12} color="#888" />
                      <Text className="text-txt-main font-bold">Gate 4</Text>
                    </View>
                  </View>
                </View>

                <View className="items-center mt-2">
                  <Text
                    className={`font-mono text-[10px] tracking-[4px] mb-1 font-black ${tierColors.accent}`}
                  >
                    TC-8892-0041-X
                  </Text>
                  <View className="w-full h-8 bg-black/20 rounded-md border border-white/5 flex-row items-center justify-center gap-2">
                    <ShieldAlert size={10} color="#FF4444" />
                    <Text className="text-status-error text-[8px] font-bold tracking-wider">
                      NO SCREENSHOTS • ANTI-FRAUD ACTIVE
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* CLOSE BUTTON */}
          <TouchableOpacity
            className="mt-[30px] self-center w-12 h-12 bg-white/10 rounded-full items-center justify-center border border-white/10"
            onPress={onClose}
          >
            <X color="#fff" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TicketModal;
