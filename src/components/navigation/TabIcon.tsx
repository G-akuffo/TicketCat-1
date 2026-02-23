import { View } from "react-native";

interface TabIconProps {
  icon: any;
  color: string;
  focused: boolean;
}

export function TabIcon({ icon: Icon, color, focused }: TabIconProps) {
  return (
    <View className="items-center justify-center w-11 h-11">
      <Icon color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
    </View>
  );
}
