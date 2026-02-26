import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = ["All Events", "Music", "Arts", "Sports", "Business"];

const CategoryButtons = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View className="mt-4 mb-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-14"
        contentContainerClassName="px-5 gap-3"
      >
        {categories.map((cat, index) => {
          const isSelected = activeIndex === index;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => setActiveIndex(index)}
              className={`px-5 py-2.5 rounded-[25px] border ${
                isSelected
                  ? "bg-surface-inverse border-surface-inverse"
                  : "bg-surface-raised border-border-subtle"
              }`}
            >
              <Text
                className={`text-sm ${
                  isSelected
                    ? "text-txt-inverted font-bold"
                    : "text-txt-muted font-medium"
                }`}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;
