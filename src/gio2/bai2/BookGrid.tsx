import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BookCard from "./BookCard";
import { BOOKS } from "../../data/books";

const BookGrid = () => {
  return (
    <View style={styles.gridContainer}>
      {BOOKS.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onPress={() => console.log(`Đã chọn sách: ${book.title}`)}
        />
      ))}
    </View>
  );
};

export default BookGrid;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
