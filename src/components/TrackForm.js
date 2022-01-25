import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Context as LocationContext } from "../../Context/LocationContext";

export default function TrackForm() {
  const {
    state: { recording, name },
    startRecording,
    stopRecording,
    addName,
  } = useContext(LocationContext);

  return (
    <ScrollView style={{ height: "20%" }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter track Name"
          style={styles.input}
          value={name}
          onChangeText={(text) => addName(text)}
        ></TextInput>

        {!recording ? (
          <TouchableOpacity style={styles.btn} onPress={() => startRecording()}>
            <Text style={{ color: "white" }}>Start Recording</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={() => stopRecording()}>
            <Text style={{ color: "white" }}>Stop</Text>
          </TouchableOpacity>
        )}
        {/*
         */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
    paddingTop: 0,
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
