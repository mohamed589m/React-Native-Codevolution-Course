import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          value={useState}
          onChangeText={setUserName}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});
