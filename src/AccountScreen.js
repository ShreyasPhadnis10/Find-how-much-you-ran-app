import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { Context as RegisterContext } from "../Context/RegisterContext";

export default function AccountScreen() {
  const { SignOut } = useContext(RegisterContext);
  return (
    <View>
      <Text>This is the accountScreen</Text>
      <Button
        title="Log out"
        onPress={() => {
          SignOut();
        }}
      ></Button>
    </View>
  );
}
