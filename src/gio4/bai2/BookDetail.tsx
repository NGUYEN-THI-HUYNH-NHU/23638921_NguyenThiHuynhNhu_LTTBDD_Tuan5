import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Book } from "../../types/book";

interface BookDetailProps {
  route?: { params: { book: Book } };
  navigation?: any;
}

export default function BookDetailScreen({
  route,
  navigation,
}: BookDetailProps) {
  const defaultBook: Book = {
    id: 7,
    title: "Cây cam ngọt của tôi",
    author: "José Mauro de Vasconcelos",
    price: 88000,
    originalPrice: 110000,
    discount: "-20%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOgJIhkw3FPbwaxyfDGvliXoRc7NhHxoixiHUp2qDjQ&s=10",
    category: "Văn học & Tiểu thuyết",
    description:
      "Câu chuyện cảm động về tình cảm gia đình, tình bạn và sự trưởng thành đầy nước mắt của cậu bé Zezé.",
    stock: 40,
  };

  const book = route?.params?.book || defaultBook;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            style={styles.backButton}
            onPress={() =>
              navigation?.goBack ? navigation.goBack() : console.log("Quay lại")
            }
          >
            <Feather name="arrow-left" size={24} color="#333" />
          </Pressable>

          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: book.thumbnailUrl }}
              style={styles.coverImage}
              resizeMode="cover"
            />
            {book.discount && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{book.discount}</Text>
              </View>
            )}
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.category}>{book.category}</Text>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>
              Tác giả: <Text style={styles.authorName}>{book.author}</Text>
            </Text>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                {book.price.toLocaleString("vi-VN")} đ
              </Text>
              {book.originalPrice && (
                <Text style={styles.originalPrice}>
                  {book.originalPrice.toLocaleString("vi-VN")} đ
                </Text>
              )}
            </View>

            <View style={styles.divider} />

            <Text style={styles.descriptionTitle}>Giới thiệu sách</Text>
            <Text style={styles.description}>
              {book.description || "Chưa có mô tả chi tiết cho cuốn sách này."}
            </Text>
          </View>
        </ScrollView>

        <Pressable
          style={({ pressed }) => [
            styles.addToCartBtn,
            pressed && styles.btnPressed,
          ]}
          onPress={() => console.log(`Đã thêm sách vào giỏ: ${book.title}`)}
        >
          <Feather name="shopping-bag" size={18} color="#fff" />
          <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
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
    paddingBottom: 100,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  imageWrapper: {
    alignSelf: "center",
    width: "60%",
    aspectRatio: 3 / 4,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
    marginBottom: 20,
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#e74c3c",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  infoSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eee",
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2b78c0",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  authorName: {
    fontWeight: "600",
    color: "#333",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2b78c0",
  },
  originalPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
  },
  priceFooterContainer: {
    flexDirection: "column",
  },
  footerLabel: {
    fontSize: 12,
    color: "#888",
  },
  footerPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2b78c0",
  },
  addToCartBtn: {
    flexDirection: "row",
    backgroundColor: "#2b78c0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    gap: 8,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  btnPressed: {
    opacity: 0.85,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
