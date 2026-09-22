import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logo} />
      <View style={styles.utilsContainer}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={24} color="black" />
          <TextInput style={styles.input} />
        </View>
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
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
  utilsContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 6,
  },
  btn: {
    borderWidth: 1,
    borderColor: "#2b78c0",
    borderRadius: 6,
    padding: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2b78c0",
    borderRadius: 6,
    padding: 6,
    backgroundColor: "#fafafa",
  },
  searchContainer: {
    flexDirection: "row",
  },
});
