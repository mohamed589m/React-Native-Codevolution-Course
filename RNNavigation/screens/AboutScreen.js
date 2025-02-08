import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}> About Screen</Text>
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
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
