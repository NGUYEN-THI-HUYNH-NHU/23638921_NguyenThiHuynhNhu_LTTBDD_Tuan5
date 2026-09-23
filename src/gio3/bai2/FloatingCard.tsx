import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function FloatingCartScreen() {
  return (
    <View style={styles.floatingCartContainer}>
      <Pressable style={styles.cartBtn}>
        <Feather name="shopping-cart" size={28} color="#fff" />
      </Pressable>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingCartContainer: {
    position: "absolute",
    bottom: 24,
    right: 20,
  },
  cartBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#2b78c0",
    justifyContent: "center",
    alignItems: "center",
  },
  cartBtnText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 2,
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#e74c3c",
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
});
