import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
//       <Box style={{ backgroundColor: "#1c4c56" }}>Box 2</Box>
//       <Box style={{ backgroundColor: "#ab9156" }}>Box 3</Box>
//       <Box style={{ backgroundColor: "#6b0803" }}>Box 4</Box>
//       <Box style={{ backgroundColor: "#1c4c56" }}>Box 5</Box>
//       <Box style={{ backgroundColor: "#b95f21" }}>Box 6</Box>
//       <Box style={{ backgroundColor: "#ab9156" }}>Box 7</Box>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 64,
//     borderWidth: 6,
//     borderColor: "red",
//   },
// });

// *************************************************************************

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Box style={{ backgroundColor: "#8e9b00", flex: 1 }}>Box 1</Box>
//       <Box style={{ backgroundColor: "#1c4c56", flex: 3 }}>Box 2</Box>
//       <Box style={{ backgroundColor: "#ab9156" }}>Box 3</Box>
//       <Box style={{ backgroundColor: "#6b0803" }}>Box 4</Box> */}
//       <Box style={{ backgroundColor: "#1c4c56", paddingVertical: 100 }}>
//         Box 5
//       </Box>
//       <Box style={{ backgroundColor: "#b95f21" }}>Box 6</Box>
//       <Box style={{ backgroundColor: "#ab9156" }}>Box 7</Box>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     // flexDirection:"column", // The default value
//     // flexDirection:"column-reverse",
//     flexDirection: "row",
//     // flexDirection:"row-reverse",

//     // justifyContent:"flex-start", // The default value
//     // justifyContent:"flex-end",
//     // justifyContent:"center",
//     // justifyContent:"space-between",
//     // justifyContent:"space-around",
//     // justifyContent:"space-evenly",

//     // alignItems: "stretch", // The default value
//     // alignItems: "flex-start",
//     // alignItems: "flex-end",
//     // alignItems: "center",
//     alignItems: "baseline", // This value will align flex items based on thier contents baseline (flex items aligned on the same baseline)

//     marginTop: 64,
//     borderWidth: 6,
//     borderColor: "red",
//   },
// });

// *************************************************************************

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/*  The default value for alignSelf is auto and inherit its value from the
//       align items property from the parent flex container */ }
//       <Box style={{ backgroundColor: "#8e9b00", alignSelf: "flex-start" }}>
//         Box 1
//       </Box>
//       <Box style={{ backgroundColor: "#1c4c56", alignSelf: "flex-end" }}>
//         Box 2
//       </Box>
//       <Box style={{ backgroundColor: "#ab9156", alignSelf: "center" }}>
//         Box 3
//       </Box>
//       <Box style={{ backgroundColor: "#6b0803", alignSelf: "stretch" }}>
//         Box 4
//       </Box>
//       <Box style={{ backgroundColor: "#1c4c56", alignSelf: "auto" }}>Box 5</Box>
//       <Box style={{ backgroundColor: "#b95f21" }}>Box 6</Box>
//       <Box style={{ backgroundColor: "#ab9156" }}>Box 7</Box>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     // alignItems: "stretch",
//     alignItems: "flex-end",
//     marginTop: 64,
//     borderWidth: 6,
//     borderColor: "red",
//   },
// });

// *************************************************************************

export default function App() {
  return (
    <View style={styles.container}>
      {/*  The default value for alignSelf is auto and inherit its value from the
      align items property from the parent flex container */}
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexWrap: "nowrap", // This is the default value
    flexWrap: "wrap",
    // flexWrap:"wrap-reverse",
    flexDirection:"row",

    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
