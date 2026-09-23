import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Pressable, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import BookStoreScreen from "../gio4/bai1/BookStoreScreen";
import BookDetailScreen from "../gio4/bai2/BookDetail";
import CartScreen from "../gio5/bai2/CartScreen";

const HomeScreen = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const renderScreen = () => {
    switch (currentTab) {
      case "home":
        return <BookStoreScreen />;
      case "detail":
        return <BookDetailScreen />;
      case "cart":
        return <CartScreen />;
      default:
        return <BookStoreScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.screenContainer}>{renderScreen()}</View>

        <View style={styles.tabBarContainer}>
          <Pressable
            style={styles.tabItem}
            onPress={() => setCurrentTab("home")}
          >
            <Feather
              name="home"
              size={22}
              color={currentTab === "home" ? "#2b78c0" : "#888"}
            />
            <Text
              style={[
                styles.tabText,
                currentTab === "home" && styles.selectedTabText,
              ]}
            >
              Trang chủ
            </Text>
          </Pressable>

          <Pressable
            style={styles.tabItem}
            onPress={() => setCurrentTab("detail")}
          >
            <Feather
              name="book-open"
              size={22}
              color={currentTab === "detail" ? "#2b78c0" : "#888"}
            />
            <Text
              style={[
                styles.tabText,
                currentTab === "detail" && styles.selectedTabText,
              ]}
            >
              Chi tiết
            </Text>
          </Pressable>

          {/* Nút Tab Giỏ hàng */}
          <Pressable
            style={styles.tabItem}
            onPress={() => setCurrentTab("cart")}
          >
            <Feather
              name="shopping-cart"
              size={22}
              color={currentTab === "cart" ? "#2b78c0" : "#888"}
            />
            <Text
              style={[
                styles.tabText,
                currentTab === "cart" && styles.selectedTabText,
              ]}
            >
              Giỏ hàng
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#2b78c0",
  },
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    position: "relative",
  },
  screenContainer: {
    flex: 1,
    paddingBottom: 60, // Chừa khoảng trống phía dưới để nội dung không bị Tab Bar che mất
  },
  // Style cho Bottom Tab Bar cố định ở đáy màn hình
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    marginTop: 2,
    fontWeight: "500",
  },
  selectedTabText: {
    color: "#2b78c0",
    fontWeight: "bold",
  },
});
