import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import RegisterDesign from "./components/RegisterDesign";
import RegisterDesignLink from "./components/RegisterDesignLink";
import { Context as RegisterContext } from "../Context/RegisterContext";

export default function SignUpScreen({ navigation }) {
  const { SignUp } = useContext(RegisterContext);

  return (
    <View>
      <RegisterDesign
        callBack={({ email, password }) => SignUp({ email, password })}
      />
      <RegisterDesignLink
        link="Already have an account? SignIn"
        navigate={() => {
          navigation.navigate("SignIn");
        }}
      />
    </View>
  );
}

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});
