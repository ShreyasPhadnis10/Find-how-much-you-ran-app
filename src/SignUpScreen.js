import React from "react";
import { View, Text, Button } from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <View>
      <Text>This is the signUp Screen</Text>
      <Button
        title="Pres me "
        onPress={() => navigation.navigate("SignIn")}
      ></Button>
    </View>
  );
}
