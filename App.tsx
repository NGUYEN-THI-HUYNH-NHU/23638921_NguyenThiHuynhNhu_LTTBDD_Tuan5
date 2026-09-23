import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/gio1/bai1/Header";
import BookCard from "./src/gio1/bai2/BookCard";
import { BOOKS } from "./src/data/books";
import Challenge1 from "./src/gio1/challenge1/Challenge1";
import CategoryChips from "./src/gio2/bai1/CategoryChips";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}

      {/* <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard book={item} />}
      /> */}

      {/* <Challenge1 /> */}

      <CategoryChips />
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
