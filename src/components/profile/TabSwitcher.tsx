import { Text, TouchableOpacity, View } from "react-native";

interface TabSwitcherProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabSwitcher = ({ activeTab, onTabChange }: TabSwitcherProps) => {
  return (
    <View className="flex-row bg-surface-raised rounded-2xl p-1 mb-[25px] border border-border-elevated">
      <TouchableOpacity
        className={`flex-1 py-2.5 items-center rounded-xl ${
          activeTab === "settings" ? "bg-surface-highlight" : ""
        }`}
        onPress={() => onTabChange("settings")}
      >
        <Text
          className={`font-semibold text-sm ${
            activeTab === "settings" ? "text-txt-main" : "text-txt-muted"
          }`}
        >
          Settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-1 py-2.5 items-center rounded-xl ${
          activeTab === "bookmarks" ? "bg-surface-highlight" : ""
        }`}
        onPress={() => onTabChange("bookmarks")}
      >
        <Text
          className={`font-semibold text-sm ${
            activeTab === "bookmarks" ? "text-txt-main" : "text-txt-muted"
          }`}
        >
          Bookmarks
        </Text>
      </TouchableOpacity>
    </View>
  );
};
