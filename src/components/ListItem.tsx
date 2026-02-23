import { Link } from "expo-router";
import { ChevronRight, MapPin } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ListItemProps {
  id: string;
  title: string;
  location: string;
  time: string;
  image: string;
}

export const ListItem = ({
  id,
  title,
  location,
  time,
  image,
}: ListItemProps) => (
  <Link href={`/event/${id}`} asChild>
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row bg-surface-raised rounded-[24px] p-3 items-center mt-3 border border-border-subtle"
    >
      <Image
        source={{ uri: image }}
        className="w-[60px] h-[60px] rounded-2xl bg-border-subtle"
        resizeMode="cover"
      />
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
