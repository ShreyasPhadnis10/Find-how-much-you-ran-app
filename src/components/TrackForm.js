import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TrackForm() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter track Name"
        style={styles.input}
      ></TextInput>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "white" }}>Start Recording</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",

    padding: 10,
  },

  input: {
    padding: 10,

    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "gray",
  },

  btn: {
    padding: 10,
    borderRadius: 20,
    width: "100%",
    marginTop: 20,
    backgroundColor: "#FF7F7F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
