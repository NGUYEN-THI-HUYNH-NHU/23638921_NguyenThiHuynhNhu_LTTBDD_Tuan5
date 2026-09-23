import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logo} />

      <View style={styles.utilsContainer}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm..."
            placeholderTextColor="#888"
          />
        </View>

        <Pressable>
          <Feather name="shopping-cart" size={24} color="#fff" />
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
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: "#2b78c0",
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
  },
  utilsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#2b78c0",
    borderRadius: 6,
    paddingHorizontal: 8,
    height: 36,
  },
  input: {
    flex: 1,
    marginLeft: 6,
    paddingVertical: 0,
    fontSize: 14,
  },
  btn: {
    borderWidth: 1,
    borderColor: "#2b78c0",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
  },
  btnText: {
    fontWeight: "600",
    fontSize: 14,
  },
});
