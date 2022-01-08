import React from "react";
import { View, Text, Button } from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <View>
      <Text>This is the signInScren</Text>
      <Button
        title="press me"
        onPress={() => navigation.navigate("TrackCreate")}
      ></Button>
    </View>
  );
}
