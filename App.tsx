import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/gio1/bai1/Header";
import BookCard from "./src/gio1/bai2/BookCard";
import BookCard2 from "./src/gio2/bai2/BookCard";
import { BOOKS } from "./src/data/books";
import Challenge1 from "./src/gio1/challenge/Challenge1";
import CategoryChips from "./src/gio2/bai1/CategoryChips";
import BookGrid from "./src/gio2/bai2/BookGrid";
import Challenge2 from "./src/gio2/challenge/Challenge2";
import FloatingCartScreen from "./src/gio3/bai2/FloatingCard";
import Challenge3 from "./src/gio3/challenge/Challenge3";
import BookStoreScreen from "./src/gio4/bai1/BookStoreScreen";
import BookDetailScreen from "./src/gio4/bai2/BookDetail";
import BottomTabBar from "./src/gio5/bai1/BottomTabBar";
import CartScreen from "./src/gio5/bai2/CartScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* Gio 1 */}
    //   {/* <Header /> */}

    //   {/* <FlatList
    //     data={BOOKS}
    //     keyExtractor={(item) => item.id.toString()}
    //     renderItem={({ item }) => <BookCard book={item} />}
    //   /> */}

    //   {/* <Challenge1 /> */}

    //   {/* Gio 2 */}
    //   {/* <CategoryChips /> */}

    //   {/* <BookGrid /> */}

    //   {/* <Challenge2 /> */}

    //   {/* Gio 3 */}
    //   {/* <BookCard2 book={BOOKS.at(0)!} /> */}

    //   {/* <FloatingCartScreen /> */}

    //   {/* <Challenge3 /> */}
    // </View>

    // <BookStoreScreen />

    // <BookDetailScreen />

    // <View style={styles.container}>
    //   <BottomTabBar />
    // </View>

    <CartScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#e6f1ff",
    padding: 16,
  },
});
