import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import RegisterDesign from "./components/RegisterDesign";

export default function SignUpScreen({ navigation }) {
  return (
    <View>
      <RegisterDesign />
    </View>
  );
}

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});
