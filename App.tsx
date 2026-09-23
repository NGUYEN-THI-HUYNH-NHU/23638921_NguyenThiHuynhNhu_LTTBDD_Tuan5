import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/bai1/Header";
import BookCard from "./src/bai2/BookCard";
import { BOOKS } from "./src/data/books";
import Challenge1 from "./src/challenge1/Challenge1";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}

      {/* <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard book={item} />}
      /> */}

      <Challenge1 />
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
