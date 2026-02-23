import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const CategoryButtons = () => {
  return (
    <View className="mb-[5px] mt-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-[50px] mb-[25px]"
        contentContainerClassName="px-5 gap-[10px]"
      >
        <TouchableOpacity className="bg-surface-inverse px-5 py-2.5 rounded-[25px] border border-surface-inverse">
          <Text className="text-txt-inverted font-bold text-sm">
            All Events
          </Text>
        </TouchableOpacity>
        {["Music", "Arts", "Sports", "Business"].map((cat) => (
          <TouchableOpacity
            key={cat}
            className="bg-surface-raised px-5 py-2.5 rounded-[25px] border border-border-subtle"
          >
            <Text className="text-txt-muted font-medium text-sm">{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;
