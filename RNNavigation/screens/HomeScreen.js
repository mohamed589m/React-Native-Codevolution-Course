import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

// *************************To navigate using navigation prop**********************
// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={Styles.container}>
//       <Text style={Styles.text}> Home Screen</Text>
//       <Button
//         title="Go to about"
//         onPress={() => navigation.navigate("About")}
//       />
//     </View>
//   );
// }

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
// });

// *************************To navigate using useNavigation hook**********************

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}> Home Screen</Text>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
