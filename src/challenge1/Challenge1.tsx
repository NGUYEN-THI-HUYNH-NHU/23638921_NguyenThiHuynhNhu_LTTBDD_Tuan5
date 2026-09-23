import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Header from "../bai1/Header";
import { BOOKS } from "../data/books";
import BookCard from "../bai2/BookCard";

const Challenge1 = () => {
  return (
    <View>
      <Header />

      <View style={styles.booksContainer}>
        <BookCard book={BOOKS.at(0)!} />
        <BookCard book={BOOKS.at(1)!} />
        <BookCard book={BOOKS.at(2)!} />
        <BookCard book={BOOKS.at(3)!} />
        <BookCard book={BOOKS.at(4)!} />
      </View>
    </View>
  );
};

export default Challenge1;

const styles = StyleSheet.create({
  booksContainer: {
    flex: 1,
    marginTop: 20,
  },
});
