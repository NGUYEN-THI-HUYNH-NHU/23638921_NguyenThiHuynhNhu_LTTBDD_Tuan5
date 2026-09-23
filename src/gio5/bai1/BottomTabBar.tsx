import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface TabItem {
  id: string;
  name: string;
  iconName: keyof typeof Feather.glyphMap;
}

const TABS: TabItem[] = [
  { id: "home", name: "Trang chủ", iconName: "home" },
  { id: "category", name: "Danh mục", iconName: "grid" },
  { id: "cart", name: "Giỏ hàng", iconName: "shopping-cart" },
  { id: "account", name: "Tài khoản", iconName: "user" },
];

const BottomTabBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <View style={styles.tabBarContainer}>
      {TABS.map((tab) => {
        const isSelected = activeTab === tab.id;
        return (
          <Pressable
            key={tab.id}
            style={styles.tabItem}
            onPress={() => setActiveTab(tab.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
          >
            <Feather
              name={tab.iconName}
              size={22}
              color={isSelected ? "#2b78c0" : "#888"}
            />
            <Text
              style={[styles.tabText, isSelected && styles.selectedTabText]}
            >
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 11,
    color: "#888",
    marginTop: 4,
    fontWeight: "500",
  },
  selectedTabText: {
    color: "#2b78c0",
    fontWeight: "bold",
  },
});
