import CategoryButtons from "@/src/components/CategoryButtons";
import { Link } from "expo-router";
import {
  Bell,
  Calendar,
  ChevronRight,
  MapPin,
  Search,
} from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// --- FIXED SUB-COMPONENTS ---

const EventCard = ({ id, title, location, date, category }: any) => (
  <Link href={`/event/${id}`} asChild>
    <TouchableOpacity activeOpacity={0.9} className="w-[280px]">
      <View className="h-[200px] rounded-[28px] bg-surface-raised mb-3 border border-border-subtle overflow-hidden">
        <View className="absolute top-[15px] left-[15px] bg-surface-inverse/95 px-3 py-[6px] rounded-[20px]">
          <Text className="text-txt-inverted text-[10px] font-extrabold">
            {category}
          </Text>
        </View>
      </View>
      <Text className="text-txt-main text-lg font-bold mb-1">{title}</Text>
      <View className="flex-row gap-3">
        <View className="flex-row items-center gap-1">
          <Calendar size={12} color="#71717a" />
          <Text className="text-txt-subtle text-xs">{date}</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <MapPin size={12} color="#71717a" />
          <Text className="text-txt-subtle text-xs">{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);

const ListItem = ({ id, title, location, time }: any) => (
  <Link href={`/event/${id}`} asChild>
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row bg-surface-raised rounded-[24px] p-3 items-center mt-3 border border-border-subtle"
    >
      <View className="w-[60px] h-[60px] rounded-2xl bg-border-subtle" />
      <View className="flex-1 px-[15px]">
        <Text className="text-txt-subtle text-[10px] font-extrabold mb-[2px]">
          {time}
        </Text>
        <Text className="text-txt-main text-base font-semibold mb-[2px]">
          {title}
        </Text>
        <View className="flex-row items-center gap-1">
          <MapPin size={10} color="#71717a" />
          <Text className="text-txt-subtle text-[10px]">{location}</Text>
        </View>
      </View>
      <View className="w-9 h-9 rounded-[18px] bg-surface-inverse justify-center items-center">
        <ChevronRight size={18} color="#000" />
      </View>
    </TouchableOpacity>
  </Link>
);

// --- MAIN SCREEN ---

export default function ExploreScreen() {
  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* STICKY HEADER */}
      <View className="flex-row justify-between items-center px-[25px] pt-[65px] pb-5 bg-background border-b border-border-elevated">
        <View>
          <Text className="text-txt-subtle text-sm font-medium">Explore</Text>
          <Text className="text-txt-main text-[34px] font-extrabold tracking-[-1px]">
            Events
          </Text>
        </View>
        <View className="flex-row gap-3">
          <TouchableOpacity className="w-12 h-12 rounded-full bg-surface-raised border border-border-subtle justify-center items-center">
            <Search size={22} color="#a1a1aa" />
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 rounded-full bg-surface-raised border border-border-subtle justify-center items-center">
            <Bell size={22} color="#a1a1aa" />
            <View className="absolute top-[14px] right-[14px] w-2 h-2 rounded-full bg-surface-inverse border-2 border-background" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20 }}
      >
        <CategoryButtons />

        <View className="flex-row justify-between items-center px-5 mb-[15px]">
          <Text className="text-txt-main text-xl font-bold">Featured</Text>
          <TouchableOpacity>
            <Text className="text-txt-subtle text-sm">See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
        >
          <EventCard
            id="1"
            title="The Afrofuture Gala"
            location="Labadi Beach"
            date="Dec 28"
            category="MUSIC"
          />
          <EventCard
            id="2"
            title="Polo Invitational"
            location="Accra Polo Club"
            date="Jan 05"
            category="SPORTS"
          />
        </ScrollView>

        <View className="mt-[35px] px-5">
          <Text className="text-txt-main text-xl font-bold">
            Happening Soon
          </Text>
          <ListItem
            id="3"
            title="Tech Summit Accra"
            location="Movenpick Hotel"
            time="TOMORROW"
          />
          <ListItem
            id="4"
            title="Sip & Paint Night"
            location="Cantonments"
            time="FRI, 19:00"
          />
        </View>

        <View className="h-[120px]" />
      </ScrollView>
    </View>
  );
}
