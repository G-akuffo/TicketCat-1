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
    <TouchableOpacity activeOpacity={0.9} className="w-[300px]">
      <View className="h-[220px] rounded-[32px] bg-surface-raised mb-4 border border-border-subtle overflow-hidden shadow-sm">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute top-4 left-4 bg-surface-inverse/90 px-3 py-1.5 rounded-full">
          <Text className="text-txt-inverted text-[10px] font-bold tracking-wide">
            {category}
          </Text>
        </View>
      </View>
      <Text className="text-txt-main text-xl font-bold mb-1.5 leading-tight">
        {title}
      </Text>
      <View className="flex-row gap-4">
        <View className="flex-row items-center gap-1.5">
          <Calendar size={14} color="#71717a" />
          <Text className="text-txt-subtle text-xs font-medium">{date}</Text>
        </View>
        <View className="flex-row items-center gap-1.5">
          <MapPin size={14} color="#71717a" />
          <Text className="text-txt-subtle text-xs font-medium">
            {location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);
