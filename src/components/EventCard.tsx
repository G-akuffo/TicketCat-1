import { Link } from "expo-router";
import { Calendar, MapPin } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface EventCardProps {
  id: string;
  title: string;
  location: string;
  date: string;
  category: string;
  image: string;
}

export const EventCard = ({
  id,
  title,
  location,
  date,
  category,
  image,
}: EventCardProps) => (
  <Link href={`/event/${id}`} asChild>
    <TouchableOpacity activeOpacity={0.9} className="w-[280px]">
      <View className="h-[200px] rounded-[28px] bg-surface-raised mb-3 border border-border-subtle overflow-hidden">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />
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
