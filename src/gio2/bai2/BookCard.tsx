import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Book } from "../../types/book";

interface BookCardProps {
  book: Book;
  onPress?: () => void;
}

const BookCard = ({ book, onPress }: BookCardProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Sách ${book.title}, giá ${book.price.toLocaleString("vi-VN")} đồng`}
    >
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
        <View style={styles.priceRow}>
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
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 8,
    marginBottom: 12,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    marginTop: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 55,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  priceRow: {
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2b78c0",
  },
});
