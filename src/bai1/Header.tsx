import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logo} />
      <View style={styles.utilsContainer}>
        <Pressable style={styles.btn}>
          <Text>Search</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text>Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    height: 56,
    backgroundColor: "#2b78c0",
  },
  logo: {
    width: 120,
    height: 45,
    backgroundColor: "#fff",
  },
  utilsContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
    padding: 6,
  },
  btn: {
    borderWidth: 1,
    borderColor: "#2b78c0",
    borderRadius: 6,
    padding: 6,
  },
});
