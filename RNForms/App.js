import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com"
        // secureTextEntry // This prop masks the input characters (like passwords)
        // keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>The message is {message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
