import { View, Text, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>StyleSheet API</Text>
//     </View>
//   );
// }

// export const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "plum",
//     flex: 1,
//     padding: 60,
//   },
//   title: {
//     textAlign: "center",
//     fontFamily: "cursive",
//   },
// });

// ******************************************************************************* //

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text>Light blue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Light green box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});
