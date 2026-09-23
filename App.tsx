import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/bai1/Header";
import BookCard from "./src/bai2/BookCard";
import { BOOKS } from "./src/data/books";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}

      <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard book={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
