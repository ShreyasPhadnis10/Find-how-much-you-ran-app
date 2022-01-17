import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-navigation";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import RegisterDesignLink from "./RegisterDesignLink";

export default function RegisterDesign({ callBack, page }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../img/logo.png")} style={styles.img} />
      </View>
      <Text style={styles.text}>{page}</Text>
      <View style={styles.input}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.email}
        />

        <TextInput
          autoCapitalize="none"
          secureTextEntry
          value={password}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          style={styles.password}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => callBack({ email, password })}
      >
        <Text style={styles.txt}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginLeft: 10,
    marginRight: 20,
  },

  image: {
    marginTop: 70,
    padding: 5,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginRight: 50,
  },

  button: {},

  img: {
    height: 60,
    width: 60,
  },

  email: {
    padding: 10,

    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "gray",
  },

  password: {
    marginTop: 20,
    padding: 10,

    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "gray",
  },

  button: {
    padding: 10,
    borderRadius: 20,
    width: "100%",
    marginTop: 20,
    backgroundColor: "#FF7F7F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  txt: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "500",
    color: "white",
  },

  text: {
    marginTop: 30,
    marginRight: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "gray",
    fontSize: 20,
  },
});
