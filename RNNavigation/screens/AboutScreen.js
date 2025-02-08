import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}> About Screen</Text>
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
