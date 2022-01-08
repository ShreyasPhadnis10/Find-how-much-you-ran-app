import React, { useState, useContext } from "react";
import { View, Button, TextInput, Text, TouchableOpacity } from "react-native";
import { Context } from "../../Context/RegisterContext";

export default function RegisterDesign() {
  const { SignUp } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        value={password}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Register" onPress={() => SignUp()} />
    </View>
  );
}
