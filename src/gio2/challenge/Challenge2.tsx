import React from "react";
import { View, StyleSheet } from "react-native";
import BookCard3Cols from "./BookCard";
import { BOOKS } from "../../data/books";

const Challenge2 = () => {
  return (
    <View style={styles.gridContainer}>
      {BOOKS.map((book) => (
        <BookCard3Cols
          key={book.id}
          book={book}
          onPress={() => console.log(`Đã chọn sách: ${book.title}`)}
        />
      ))}
    </View>
  );
};

export default Challenge2;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
});
