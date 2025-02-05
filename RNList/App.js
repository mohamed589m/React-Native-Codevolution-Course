import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import PokemonList from "./data.json";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         {PokemonList.map((pokemon) => {
//           return (
//             <View key={pokemon.id} style={styles.card}>
//               <Text style={styles.cardText}>{pokemon.type}</Text>
//               <Text style={styles.cardText}>{pokemon.name}</Text>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// ************************************************************************************************
/* In react native the recommended approach to rendering lists is to use the flat list component
which renders only the items currently in view making it highly performant for long lists */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {PokemonList.map((pokemon) => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      <View style={styles.scrollView}>
        <FlatList
          data={PokemonList}
          renderItem={({ item }) => {
            // the parameter must called item
            console.log(item.id);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          // horizontal // If you want to render the list horizontally
          // horizontal={false}

          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight, // SafeAreaView on ios will not affected by this
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
