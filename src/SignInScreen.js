import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import RegisterDesign from "./components/RegisterDesign";
import RegisterDesignLink from "./components/RegisterDesignLink";
import { Context as RegisterContext } from "../Context/RegisterContext";

export default function SignInScreen({ navigation }) {
  const { SignIn } = useContext(RegisterContext);
  return (
    <View>
      <RegisterDesign
        callBack={({ email, password }) => SignIn({ email, password })}
      />
      <RegisterDesignLink
        link="Dont have an account? SignUp"
        navigate={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}

SignInScreen.navigationOptions = () => {
  return { headerShown: false };
};
