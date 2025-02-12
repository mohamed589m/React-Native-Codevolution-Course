import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import PokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

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

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <ScrollView style={styles.scrollView}>
//         {PokemonList.map((pokemon) => {
//           return (
//             <View key={pokemon.id} style={styles.card}>
//               <Text style={styles.cardText}>{pokemon.type}</Text>
//               <Text style={styles.cardText}>{pokemon.name}</Text>
//             </View>
//           );
//         })}
//       </ScrollView> */}

//       <View style={styles.scrollView}>
//         <FlatList
//           data={PokemonList}
//           renderItem={({ item }) => {
//             // the parameter must called item
//             console.log(item.id);
//             return (
//               <View key={item.id} style={styles.card}>
//                 <Text style={styles.cardText}>{item.type}</Text>
//                 <Text style={styles.cardText}>{item.name}</Text>
//               </View>
//             );
//           }}
//           // horizontal // If you want to render the list horizontally
//           // horizontal={false}

//           keyExtractor={(item, index) => item.id.toString()}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: StatusBar.currentHeight, // SafeAreaView on ios will not affected by this
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: "white",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     marginBottom: 16,
//   },
//   cardText: {
//     fontSize: 30,
//   },
// });

// ************************************************************************************************

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.scrollView}>
//         <FlatList
//           data={PokemonList}
//           //  {...data.length==0?contentContainerStyle={styles.flatListStyle}:null}
//           renderItem={({ item }) => {
//             // the parameter must called item
//             // console.log(item.id);
//             return (
//               <View key={item.id} style={styles.card}>
//                 <Text style={styles.cardText}>{item.type}</Text>
//                 <Text style={styles.cardText}>{item.name}</Text>
//               </View>
//             );
//           }}
//           // horizontal // If you want to render the list horizontally
//           // horizontal={false}

//           keyExtractor={(item, index) => item.id.toString()}
//           ItemSeparatorComponent={<View style={{ height: 16 }} />} //It is the component between each item in the list and we use it here instead of marginBottom that makes a marginBottom for the last element too
//           ListEmptyComponent={
//             <Text style={styles.emptyText}>No items found</Text>
//           } //this prop accepts a react component and renders it when the list is empty
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: StatusBar.currentHeight, // SafeAreaView on ios will not affected by this
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//     flex: 1,
//   },
//   card: {
//     backgroundColor: "white",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     // marginBottom: 16,
//   },
//   cardText: {
//     fontSize: 30,
//   },
//   flatListStyle: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   emptyText: {
//     fontSize: 20,
//     color: "gray",
//   },
// });

// ************************************************************************************************
// *When list is empty
// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.scrollView}>
//         <FlatList
//           data={[]}
//           renderItem={({ item }) => {
//             // the parameter must called item
//             // console.log(item.id);
//             return (
//               <View key={item.id} style={styles.card}>
//                 <Text style={styles.cardText}>{item.type}</Text>
//                 <Text style={styles.cardText}>{item.name}</Text>
//               </View>
//             );
//           }}
//           // horizontal // If you want to render the list horizontally
//           // horizontal={false}

//           keyExtractor={(item, index) => item.id.toString()}
//           ItemSeparatorComponent={<View style={{ height: 16 }} />} //It is the component between each item in the list and we use it here instead of marginBottom that makes a marginBottom for the last element too
//           ListEmptyComponent={
//             <Text style={styles.emptyText}>No items found</Text>
//           } //this prop accepts a react component and renders it when the list is empty
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: StatusBar.currentHeight, // SafeAreaView on ios will not affected by this
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: "white",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     // marginBottom: 16,
//   },
//   cardText: {
//     fontSize: 30,
//   },

//   emptyText: {
//     fontSize: 20,
//     color: "gray",
//   },
// });

// ************************************************************************************************

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.scrollView}>
//         <FlatList
//           data={PokemonList}
//           renderItem={({ item }) => {
//             // the parameter must called item
//             // console.log(item.id);
//             return (
//               <View key={item.id} style={styles.card}>
//                 <Text style={styles.cardText}>{item.type}</Text>
//                 <Text style={styles.cardText}>{item.name}</Text>
//               </View>
//             );
//           }}
//           // horizontal // If you want to render the list horizontally
//           // horizontal={false}

//           keyExtractor={(item, index) => item.id.toString()}
//           ItemSeparatorComponent={<View style={{ height: 16 }} />} //It is the component between each item in the list and we use it here instead of marginBottom that makes a marginBottom for the last element too
//           ListEmptyComponent={
//             <Text style={styles.emptyText}>No items found</Text>
//           } //this prop accepts a react component and renders it when the list is empty

//           ListHeaderComponent={
//             <Text style={styles.headerText}>Pokemon List</Text>
//           }

//           ListFooterComponent={
//             <Text style={styles.footerText}>End of list</Text>
//           }

//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: StatusBar.currentHeight, // SafeAreaView on ios will not affected by this
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: "white",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     // marginBottom: 16,
//   },
//   cardText: {
//     fontSize: 30,
//   },
//   emptyText: {
//     fontSize: 20,
//     color: "gray",
//   },
//   headerText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 12,
//   },
//   footerText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginTop: 12,
//   },
// });

// ************************************************************************************************

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            // Item here refers to each element in the data array in hence the property in grouped-data.json being called data is vital
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 16 }} />} //It is the component between each section in the list
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  emptyText: {
    fontSize: 20,
    color: "gray",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
