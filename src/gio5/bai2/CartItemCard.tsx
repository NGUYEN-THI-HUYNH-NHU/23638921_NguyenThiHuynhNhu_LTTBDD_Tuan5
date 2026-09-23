import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  thumbnailUrl: string;
}

interface CartItemCardProps {
  item: CartItem;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export default function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) {
  return (
    <View style={styles.cartItemCard}>
      <Image
        source={{ uri: item.thumbnailUrl }}
        style={styles.thumbnail}
        resizeMode="cover"
      />

      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {item.title}
        </Text>

        <View style={styles.rowActions}>
          <Text style={styles.quantityText}>SL: {item.quantity}</Text>

          {onRemove && (
            <Pressable onPress={onRemove} style={styles.deleteBtn}>
              <Feather name="trash-2" size={16} color="#e74c3c" />
            </Pressable>
          )}
        </View>
      </View>

      <View style={styles.priceBox}>
        <Text style={styles.itemPrice}>
          {(item.price * item.quantity).toLocaleString("vi-VN")} đ
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 10,
    marginBottom: 12,
  },
  thumbnail: {
    width: 56,
    height: 72,
    borderRadius: 4,
    backgroundColor: "#f0f0f0",
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 72,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  rowActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },
  quantityText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  deleteBtn: {
    padding: 4,
  },
  priceBox: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#e8f4fd",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#b9d9f5",
    justifyContent: "center",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2b78c0",
  },
});
