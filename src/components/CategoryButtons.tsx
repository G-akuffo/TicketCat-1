import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CategoryButtons = () => {
  return (
    <View style={styles.categoriesContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
        contentContainerStyle={styles.categoriesContent}
      >
        <TouchableOpacity style={[styles.categoryBtn, styles.activeCategory]}>
          <Text style={styles.activeCategoryText}>All Events</Text>
        </TouchableOpacity>
        {["Music", "Arts", "Sports", "Business"].map((cat) => (
          <TouchableOpacity key={cat} style={styles.categoryBtn}>
            <Text style={styles.categoryBtnText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginBottom: 5,
    marginTop: 20,
  },
  categoriesScroll: { maxHeight: 50, marginBottom: 25 },
  categoriesContent: { paddingHorizontal: 20, gap: 10 },
  categoryBtn: {
    backgroundColor: "#0a0a0a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#18181b",
  },
  activeCategory: { backgroundColor: "#fff", borderColor: "#fff" },
  activeCategoryText: { color: "#000", fontWeight: "700", fontSize: 14 },
  categoryBtnText: { color: "#a1a1aa", fontWeight: "500", fontSize: 14 },
});

export default CategoryButtons;
