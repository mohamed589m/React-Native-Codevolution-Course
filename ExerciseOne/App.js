import { StyleSheet, SafeAreaView, Platform } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: "charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...charmanderData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});
