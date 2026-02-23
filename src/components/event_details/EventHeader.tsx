import { ArrowLeft, Heart, Share2 } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

interface EventHeaderProps {
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function EventHeader({
  onBack,
  isFavorite,
  onToggleFavorite,
}: EventHeaderProps) {
  return (
    <View className="flex-row justify-between items-center px-6 pt-[60px] z-10">
      <TouchableOpacity
        onPress={onBack}
        className="w-10 h-10 rounded-full bg-black/50 items-center justify-center backdrop-blur-md"
      >
        <ArrowLeft color="#fff" size={20} />
      </TouchableOpacity>

      <View className="flex-row gap-4">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-black/50 items-center justify-center backdrop-blur-md">
          <Share2 color="#fff" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onToggleFavorite}
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
  );
}
