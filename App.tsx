import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/gio1/bai1/Header";
import BookCard from "./src/gio1/bai2/BookCard";
import { BOOKS } from "./src/data/books";
import Challenge1 from "./src/gio1/challenge/Challenge1";
import CategoryChips from "./src/gio2/bai1/CategoryChips";
import BookGrid from "./src/gio2/bai2/BookGrid";
import Challenge2 from "./src/gio2/challenge/Challenge2";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Gio 1 */}
      {/* <Header /> */}

      {/* <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard book={item} />}
      /> */}

      {/* <Challenge1 /> */}

      {/* Gio 2 */}
      {/* <CategoryChips /> */}

      {/* <BookGrid /> */}

      <Challenge2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f1ff",
    padding: 16,
  },
});
