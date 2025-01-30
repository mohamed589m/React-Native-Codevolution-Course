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

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, styles.lightblueBg]}>
//         <Text>Light blue box</Text>
//       </View>
//       <View style={[styles.box, styles.lightgreenBg]}>
//         <Text>Light green box</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "plum",
//     flex: 1,
//     padding: 60,
//   },
//   box: {
//     width: 100,
//     height: 100,
//     padding: 10,
//   },
//   lightblueBg: {
//     backgroundColor: "lightblue",
//   },
//   lightgreenBg: {
//     backgroundColor: "lightgreen",
//   },
// });

// ******************************************************************************* //

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg, styles.androidShadow]}>
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
    width: "100%",
    height: "25%",
    // padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // margin: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",

    // * Border radius is applicable to view component across both platforms (android and ios) but for text component it only applies to android

    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  //* Apply only on ios
  boxShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  //****************************** */
  //* To make shadow apply on android
  androidShadow: {
    elevation: 10,
    shadowColor:"gray" // The only shadow property that work on android
  },
});
