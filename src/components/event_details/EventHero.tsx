import { ImageBackground, View } from "react-native";

interface EventHeroProps {
  image: string;
}

export function EventHero({ image }: EventHeroProps) {
  return (
    <View className="h-[400px] w-full absolute top-0">
      <ImageBackground
        source={{ uri: image }}
        className="w-full h-full"
        resizeMode="cover"
      >
        <View className="absolute inset-0 bg-black/40" />
        <View className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-background to-transparent" />
      </ImageBackground>
    </View>
  );
}
