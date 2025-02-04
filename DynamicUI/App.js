// import { useEffect, useState } from "react";
// import { Dimensions, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   const [dimensions, setDimensions] = useState({
//     window: Dimensions.get("window"),
//   });

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change", ({ window }) =>
//       setDimensions({ window })
//     );
//     return () => subscription?.remove();
//   });

//   const { window } = dimensions;
//   const windowWidth = window.width;
//   const windowHeight = window.height;

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.box,
//           {
//             width: windowWidth > 500 ? "70%" : "90%",
//             height: windowHeight > 600 ? "60%" : "90%",
//           },
//         ]}
//       >
//         <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!</Text>
//       </View>
//     </View>
//   );
// }

// *****************************************************************************************************

// import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

// export default function App() {
//   const windowWidth = useWindowDimensions().width;
//   const windowHeight = useWindowDimensions().height;

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.box,
//           {
//             width: windowWidth > 500 ? "70%" : "90%",
//             height: windowHeight > 600 ? "60%" : "90%",
//           },
//         ]}
//       >
//         <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!</Text>
//       </View>
//     </View>
//   );
// }

// // const windowWidth = Dimensions.get("window").width;
// // const windowHeight = Dimensions.get("window").height;

// // console.log({ windowWidth, windowHeight });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     // width: windowWidth > 500 ? "70%" : "90%",
//     // height: windowHeight > 600 ? "60%" : "90%",
//     backgroundColor: "lightblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   // text: {
//   //   fontSize: windowWidth > 500 ? 50 : 24,
//   // },
// });

// *****************************************************************************************************
// ********************************************SafeAreaView***********************************************

// import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeContainer}>
//       <View style={styles.container}>
//         <View style={styles.box}>
//           <Text style={styles.text}>Welcome</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeContainer: {
//     flex: 1,
//     backgroundColor: "plum",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//   },
//   box: {
//     padding: 20,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// *****************************************************************************************************
// ********************************************Platform Specific Code***********************************************

import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    // paddingTop: Platform.OS === "ios" ? 25 : 0,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      android: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      ios: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
