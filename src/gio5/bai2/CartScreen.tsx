import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import CartItemCard, { CartItem } from "./CartItemCard";
import BottomTabBar from "../bai1/BottomTabBar";

export const CART_DATA: CartItem[] = [
  {
    id: "1",
    title: "Tôi nói gì khi nói về chạy bộ",
    price: 75000,
    quantity: 2,
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuP6zfCS-gN1aL2SdZfxJZa3RkgVBEQXJjWEMUFA-vJw&s=10",
  },
  {
    id: "2",
    title: "Chiếc Lexus và cây ô liu",
    price: 180000,
    quantity: 1,
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHjzE-8xO2W1ChUhCDxpfV5Y6QFRzqSlwE0FvT6VmEg&s=10",
  },
  {
    id: "3",
    title: "Dấn thân",
    price: 120000,
    quantity: 3,
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnmx6Av-NX1x60xeNVP8Lz2YqPwY8kjFFPD-yQE-9SQ&s=10",
  },
];

export default function CartScreen() {
  const totalPrice = CART_DATA.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Giỏ hàng của bạn</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {CART_DATA.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onRemove={() => console.log(`Xóa sản phẩm: ${item.id}`)}
            />
          ))}
        </ScrollView>

        <View style={styles.checkoutContainer}>
          <View>
            <Text style={styles.totalLabel}>Tổng tiền:</Text>
            <Text style={styles.totalPrice}>
              {totalPrice.toLocaleString("vi-VN")} đ
            </Text>
          </View>
          <Pressable
            style={styles.checkoutBtn}
            onPress={() => console.log("Thanh toán")}
          >
            <Text style={styles.checkoutBtnText}>Thanh toán</Text>
          </Pressable>
        </View>

        <BottomTabBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "#fafafa", position: "relative" },
  headerContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  scrollView: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 140 },
  checkoutContainer: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    elevation: 6,
  },
  totalLabel: { fontSize: 12, color: "#666" },
  totalPrice: { fontSize: 16, fontWeight: "bold", color: "#2b78c0" },
  checkoutBtn: {
    backgroundColor: "#2b78c0",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  checkoutBtnText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
});
