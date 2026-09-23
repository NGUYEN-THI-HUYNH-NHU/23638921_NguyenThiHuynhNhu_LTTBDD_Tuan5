import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BookGrid from "../../gio2/bai2/BookGrid";
import FloatingCartScreen from "../bai2/FloatingCard";

const Challenge3 = () => {
  return (
    <View style={styles.container}>
      <BookGrid />
      <FloatingCartScreen />
    </View>
  );
};

export default Challenge3;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
});
