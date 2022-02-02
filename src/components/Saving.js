import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context as SaveContext } from "../../Context/SaveLocationContext";
import { Context as LocationContext } from "../../Context/LocationContext";
import useSaveTrack from "../../hooks/useSaveTrack";

export default function Saving() {
  const { savePost } = useSaveTrack();

  const { clearLocation } = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => savePost()}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={() => clearLocation()}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            textTransform: "uppercase",

            color: "#FF7F7F",
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "20%",
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    height: "100%",
    width: "45%",
    padding: 5,
    backgroundColor: "#FF7F7F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  btn2: {
    height: "100%",
    width: "45%",
    padding: 5,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});
