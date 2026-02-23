import { Event } from "@/src/types/event";
import { BlurView } from "expo-blur";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface EventContentProps {
  event: Event;
}

export function EventContent({ event }: EventContentProps) {
  return (
    <View className="px-6 pb-6">
      <BlurView
        intensity={80}
        tint="dark"
        className="rounded-[32px] overflow-hidden border border-white/10 bg-black/60"
      >
        <View className="p-6 gap-6">
          {/* Title & Badge */}
          <View className="gap-3">
            <View className="flex-row justify-between items-start">
              <View className="bg-white/10 self-start px-3 py-1.5 rounded-full border border-white/10">
                <Text className="text-white text-[10px] font-bold tracking-widest uppercase">
                  {event.category || "EVENT"}
                </Text>
              </View>
              <View className="flex-row items-center gap-1.5 bg-status-success/10 px-2 py-1 rounded-lg border border-status-success/20">
                <View className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
                <Text className="text-status-success text-[10px] font-bold">
                  SELLING FAST
                </Text>
              </View>
            </View>
            <Text className="text-white text-3xl font-black leading-tight">
              {event.title}
            </Text>
          </View>

          {/* Info Grid */}
          <View className="flex-row gap-4">
            <View className="flex-1 bg-white/5 p-3 rounded-2xl border border-white/5 gap-1">
              <Calendar size={18} color="#71717a" />
              <Text className="text-zinc-400 text-xs font-medium">Date</Text>
              <Text className="text-white text-sm font-bold">{event.date}</Text>
            </View>
            <View className="flex-1 bg-white/5 p-3 rounded-2xl border border-white/5 gap-1">
              <Clock size={18} color="#71717a" />
              <Text className="text-zinc-400 text-xs font-medium">Time</Text>
              <Text className="text-white text-sm font-bold">{event.time}</Text>
            </View>
          </View>

          {/* Location */}
          <View className="flex-row items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
            <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
              <MapPin size={20} color="#fff" />
            </View>
            <View className="flex-1">
              <Text className="text-white text-base font-bold">
                {event.location}
              </Text>
              <Text className="text-zinc-400 text-xs">
                Open in Maps • 2.5km away
              </Text>
            </View>
            <TouchableOpacity className="bg-white/10 p-2 rounded-xl">
              <ArrowLeft
                size={16}
                color="#fff"
                style={{ transform: [{ rotate: "180deg" }] }}
              />
            </TouchableOpacity>
          </View>

          {/* Description */}
          <View className="gap-3 mt-2">
            <Text className="text-white text-lg font-bold">About Event</Text>
            <Text className="text-zinc-400 text-sm leading-6">
              {event.description}
            </Text>
          </View>

          {/* Organizer */}
          <View className="flex-row items-center gap-3 mt-2 border-t border-white/10 pt-6">
            <View className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10" />
            <View>
              <Text className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
                ORGANIZED BY
              </Text>
              <Text className="text-white text-sm font-bold">
                TicketCat Official
              </Text>
            </View>
          </View>
        </View>
      </BlurView>
    </View>
  );
}
