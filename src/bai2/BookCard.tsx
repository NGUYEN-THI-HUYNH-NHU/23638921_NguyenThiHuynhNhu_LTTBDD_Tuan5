import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type Book = {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
};

const book: Book = {
  id: 1,
  image:
    "https://upload.wikimedia.org/wikipedia/vi/c/c3/Toinoigikhinoivechaybo.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original",
  title: "Tôi nói gì khi nói về chạy bộ",
  author: "Murakami Haruki",
  price: 79000,
};

const BookCard = () => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: book.image }} style={styles.img} alt={book.title} />
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {},
  img: {},
  infoContainer: {},
  title: {},
  author: {},
  price: {},
});
