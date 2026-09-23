import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "../../gio1/bai1/Header";
import CategoryChips from "../../gio2/bai1/CategoryChips";
import BookGrid from "../../gio2/bai2/BookGrid";
import FloatingCartScreen from "../../gio3/bai2/FloatingCard";

export default function BookStoreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <CategoryChips />
          <BookGrid />
        </ScrollView>

        <FloatingCartScreen />
      </View>
    </SafeAreaView>
  );
}

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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
});
