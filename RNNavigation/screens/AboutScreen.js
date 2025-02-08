import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ navigation, route }) {
  const { name } = route.params;

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}> About {name}</Text>
      <Button
        title="Go to home"
        onPress={() =>
          navigation.navigate("Home", {
            result: "Data from about",
          })
        }
      />
      <View style={{ height: 10 }} />
      <Button
        title="Update the name"
        onPress={() =>
          navigation.setParams({
            name: "Mohamed Tamer",
          })
        }
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
