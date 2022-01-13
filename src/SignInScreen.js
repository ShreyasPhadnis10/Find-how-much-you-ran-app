import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import RegisterDesign from "./components/RegisterDesign";
import RegisterDesignLink from "./components/RegisterDesignLink";
import { Context as RegisterContext } from "../Context/RegisterContext";

export default function SignInScreen({ navigation }) {
  const { SignIn } = useContext(RegisterContext);
  return (
    <View style={styles.container}>
      <RegisterDesign
        callBack={({ email, password }) => SignIn({ email, password })}
        page="Log in..."
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
