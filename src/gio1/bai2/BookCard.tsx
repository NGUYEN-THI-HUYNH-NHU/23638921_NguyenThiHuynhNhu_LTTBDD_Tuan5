import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Book } from "../../types/book";

interface BookCardProps {
  book: Book;
  onPress?: () => void;
}

const BookCard = ({ book, onPress }: BookCardProps) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: book.thumbnailUrl }}
          style={styles.coverImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {book.title}
        </Text>

        <Text style={styles.author} numberOfLines={1}>
          {book.author}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {book.price.toLocaleString("vi-VN")} đ
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 16,
    alignItems: "flex-start",
  },
  imageContainer: {
    width: 80,
    height: 110,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 110,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  author: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
  priceContainer: {
    marginTop: "auto",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2b78c0",
  },
});
