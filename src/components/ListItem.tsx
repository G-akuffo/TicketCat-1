import { Link } from "expo-router";
import { ChevronRight, MapPin } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ListItemProps {
  id: string;
  title: string;
  location: string;
  time: string;
  date?: string; // Make optional to support legacy usage
  image: string;
}

export const ListItem = ({
  id,
  title,
  location,
  time,
  date,
  image,
}: ListItemProps) => {
  // Format the date/time string: "10 Jan, 2026 • 19:00"
  let formattedDate = date;

  // If date is in YYYY-MM-DD format (from Supabase), format it nicely
  if (date && date.includes("-")) {
    const dateObj = new Date(date);
    if (!isNaN(dateObj.getTime())) {
      formattedDate = dateObj.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
  }

  // Format Time: "19:00" (remove seconds if present)
  const formattedTime = time ? time.slice(0, 5) : time;

  const dateTimeString = formattedDate
    ? `${formattedDate} • ${formattedTime}`
    : formattedTime;

  return (
    <Link href={`/event/${id}`} asChild>
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row bg-surface-raised rounded-[24px] p-4 items-center mt-4 border border-border-subtle shadow-sm"
      >
        <Image
          source={{ uri: image }}
          className="w-16 h-16 rounded-2xl bg-border-subtle"
          resizeMode="cover"
        />
        <View className="flex-1 px-4">
          <Text className="text-txt-subtle text-xs font-bold mb-1 uppercase tracking-wide">
            {dateTimeString}
          </Text>
          <Text
            className="text-txt-main text-lg font-bold mb-1 leading-tight"
            numberOfLines={1}
          >
            {title}
          </Text>
          <View className="flex-row items-center gap-1.5">
            <MapPin size={12} color="#71717a" />
            <Text
              className="text-txt-subtle text-xs font-medium"
              numberOfLines={1}
            >
              {location}
            </Text>
          </View>
        </View>
        <View className="w-10 h-10 rounded-full bg-surface-inverse justify-center items-center shadow-sm">
          <ChevronRight size={20} color="#000" />
        </View>
      </TouchableOpacity>
    </Link>
  );
};
