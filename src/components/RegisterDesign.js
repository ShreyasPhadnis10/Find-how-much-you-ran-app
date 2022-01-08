import React, { useState } from "react";
import { View, Button, TextInput, Text } from "react-native";

export default function RegisterDesign() {
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
    </View>
  );
}
