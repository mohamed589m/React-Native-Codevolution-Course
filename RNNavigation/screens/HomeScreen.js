import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}> Home Screen</Text>
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
