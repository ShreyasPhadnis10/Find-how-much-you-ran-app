import React, { useState, useContext } from "react";
import { View, Button, TextInput, StyleSheet, Image } from "react-native";
import { Context } from "../../Context/RegisterContext";

export default function RegisterDesign() {
  const { SignUp } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../img/logo.png")} style={styles.img} />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.email}
        />

        <TextInput
          secureTextEntry
          value={password}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          style={styles.password}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Register"
          onPress={() => SignUp()}
          style={ }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    marginTop: 60,
    padding: 5,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    padding: 10,
    marginTop: 20,
    marginRight: 50,
    marginLeft: 10,
  },

  button: {},

  img: {
    height: 60,
    width: 60,
  },

  email: {
    padding: 10,
    textTransform: "uppercase",
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "gray",
  },

  password: {
    marginTop: 20,
    padding: 10,
    textTransform: "uppercase",
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "gray",
  },

  button: {
    padding: 10,
    marginRight: 20,

    borderRadius: "30%",
  },
});
