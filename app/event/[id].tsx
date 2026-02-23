import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Heart,
  MapPin,
  Share2,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

// Mock Data (In a real app, fetch by ID)
const EVENTS = {
  "1": {
    id: "1",
    title: "The Afrofuture Gala",
    date: "Dec 28, 2026",
    time: "19:00 GMT",
    location: "Labadi Beach, Accra",
    category: "MUSIC",
    image: "https://images.unsplash.com/photo-1514525253344-a812df99a716?w=800",
    description:
      "Join us for an unforgettable night celebrating African culture, music, and art. The Afrofuture Gala brings together the brightest stars and creatives for a seaside extravaganza under the stars. Expect live performances, gourmet cuisine, and a vibrant atmosphere.",
    price: "$150.00",
  },
  "2": {
    id: "2",
    title: "Polo Invitational",
    date: "Jan 05, 2027",
    time: "14:00 GMT",
    location: "Accra Polo Club",
    category: "SPORTS",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    description:
      "Experience the elegance of the sport of kings at the annual Polo Invitational. Enjoy thrilling matches, exclusive VIP lounges, and a day of high fashion and networking.",
    price: "$250.00",
  },
  "3": {
    id: "3",
    title: "Tech Summit Accra",
    date: "Tomorrow",
    time: "09:00 GMT",
    location: "Movenpick Hotel",
    category: "BUSINESS",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    description:
      "The premier technology conference in West Africa. Connect with industry leaders, startups, and investors. Panels, workshops, and networking sessions throughout the day.",
    price: "$80.00",
  },
  "4": {
    id: "4",
    title: "Sip & Paint Night",
    date: "Friday",
    time: "19:00 GMT",
    location: "Cantonments",
    category: "ARTS",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    description:
      "Unleash your inner artist at our Sip & Paint Night. No experience required! All materials provided, along with complimentary wine and snacks.",
    price: "$45.00",
  },
};

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  // Fallback if ID not found or mock data missing
  const event = EVENTS[id as keyof typeof EVENTS] || EVENTS["1"];

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* Hero Image & Header */}
      <View className="h-[400px] w-full absolute top-0">
        <ImageBackground
          source={{ uri: event.image }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <View className="absolute inset-0 bg-black/40" />
          <View className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-background to-transparent" />
        </ImageBackground>
      </View>

      {/* Navigation Header */}
      <View className="flex-row justify-between items-center px-6 pt-[60px] z-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-black/50 items-center justify-center backdrop-blur-md"
        >
          <ArrowLeft color="#fff" size={20} />
        </TouchableOpacity>

        <View className="flex-row gap-4">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-black/50 items-center justify-center backdrop-blur-md">
            <Share2 color="#fff" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 rounded-full bg-black/50 items-center justify-center backdrop-blur-md"
          >
            <Heart
              color={isFavorite ? "#FF4444" : "#fff"}
              fill={isFavorite ? "#FF4444" : "transparent"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1 pt-[280px]"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
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
                  <Text className="text-zinc-400 text-xs font-medium">
                    Date
                  </Text>
                  <Text className="text-white text-sm font-bold">
                    {event.date}
                  </Text>
                </View>
                <View className="flex-1 bg-white/5 p-3 rounded-2xl border border-white/5 gap-1">
                  <Clock size={18} color="#71717a" />
                  <Text className="text-zinc-400 text-xs font-medium">
                    Time
                  </Text>
                  <Text className="text-white text-sm font-bold">
                    {event.time}
                  </Text>
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
                <Text className="text-white text-lg font-bold">
                  About Event
                </Text>
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
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="absolute bottom-0 w-full px-6 pt-4 pb-8 bg-black/90 border-t border-white/10 backdrop-blur-xl">
        <View className="flex-row items-center justify-between gap-6">
          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-1 bg-white h-14 rounded-[20px] items-center justify-center flex-row gap-2 shadow-lg shadow-white/10"
          >
            <Text className="text-black text-base font-black tracking-wide">
              BUY TICKET
            </Text>
            <ArrowLeft
              size={18}
              color="#000"
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
