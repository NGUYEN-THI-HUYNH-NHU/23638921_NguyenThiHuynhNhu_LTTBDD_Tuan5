import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CATEGORIES } from "../../data/books";

const CategoryChips = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  return (
    <View style={styles.chipsContainer}>
      {CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <Pressable
            key={category}
            style={[styles.chip, isSelected && styles.selectedChip]}
            onPress={() => setSelectedCategory(category)}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
          >
            <Text
              style={[styles.chipText, isSelected && styles.selectedChipText]}
            >
              {category}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CategoryChips;

const styles = StyleSheet.create({
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2b78c0",
    backgroundColor: "#fff",
  },
  selectedChip: {
    backgroundColor: "#2b78c0",
  },
  chipText: {
    fontSize: 14,
    color: "#2b78c0",
    fontWeight: "500",
  },
  selectedChipText: {
    color: "#fff",
  },
});
