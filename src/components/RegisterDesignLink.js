import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function RegisterDesignLink({ link, navigate }) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigate()}>
        <Text style={styles.txt}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: "#81d4fa",
    fontSize: 10,
    fontWeight: "300",
  },

  container: {
    marginLeft: 12,
    padding: 5,
    marginTop: 30,
  },
});
