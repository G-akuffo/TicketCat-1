import { ChevronRight } from "lucide-react-native";
import { Switch, Text, TouchableOpacity, View } from "react-native";

interface SectionProps {
  title: string;
  items: any[];
}

export const SettingsSection = ({ title, items }: SectionProps) => {
  return (
    <View className="mb-[25px]">
      <Text className="text-[11px] font-semibold text-txt-ghost uppercase tracking-[1.5px] ml-1 mb-3">
        {title}
      </Text>
      <View className="bg-surface-raised rounded-[24px] border border-border-elevated overflow-hidden">
        {items.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            className={`flex-row justify-between items-center p-4 ${
              index !== items.length - 1 ? "border-b border-border-subtle" : ""
            }`}
            onPress={() =>
              item.type === "toggle" ? item.setter(!item.state) : null
            }
          >
            <View className="flex-row items-center">
              <View className="w-8 h-8 justify-center items-center mr-3">
                <item.icon size={20} color="#888" />
              </View>
              <Text className="text-[15px] font-medium text-txt-dim">
                {item.label}
              </Text>
            </View>

            <View className="flex-row items-center">
              {item.type === "toggle" ? (
                <Switch
                  value={item.state}
                  onValueChange={item.setter}
                  trackColor={{ false: "#333", true: "#fff" }}
                  thumbColor={item.state ? "#000" : "#888"}
                  ios_backgroundColor="#1a1a1a"
                />
              ) : (
                <View className="flex-row items-center">
                  {item.value && (
                    <Text className="text-sm text-txt-muted mr-2">
                      {item.value}
                    </Text>
                  )}
                  <ChevronRight size={18} color="#444" />
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
