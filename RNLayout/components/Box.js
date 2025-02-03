import { StyleSheet, Text, View } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   box: {
//     backgroundColor: "white",
//     padding: 20,
//     // height: 50,
//     // width: 50,
//     flexGrow: 1,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "white",
//   },
// });

// **********************************************************************

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,

    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
