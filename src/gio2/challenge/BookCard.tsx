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
        <Text style={styles.price} numberOfLines={1}>
          {book.price.toLocaleString("vi-VN")} đ
        </Text>
      </View>
    </Pressable>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {
    // width: (100% - tổng gap) / số cột = (100% - 16*2) / 3 ≈ 31.5% hoặc tính theo flexBasis.
    width: "30%",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 6,
    marginBottom: 8,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    marginTop: 6,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2b78c0",
    marginTop: 2,
  },
});
