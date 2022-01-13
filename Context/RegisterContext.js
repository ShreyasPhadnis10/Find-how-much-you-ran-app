import createDataContext from "./createDataContext";
import tracks from "../api/tracks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigator";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const SignUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await tracks.post("/signup", { email, password });

      const token = response.data.token;

      await AsyncStorage.setItem("token", token);
      navigate("mainFlow");
    } catch (err) {
      console.log(err);
    }
  };
};

const SignIn = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await tracks.post("/signin", { email, password });

      const token = response.data.token;

      await AsyncStorage.setItem("token", token);

      navigate("mainFlow");
    } catch (err) {
      console.log("something is wrong "); //improve this with state error message
    }
  };
};

const automaticLogin = (dispatch) => {
  return async () => {
    const automate = await AsyncStorage.getItem("token");

    if (automate) {
      navigate("mainFlow");
    } else {
      navigate("loginFlow");
    }
  };
};

const SignOut = (dispatch) => {
  return async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigate("loginFlow");
    } catch (err) {
      console.log("There is an error in logging out");
    }
  };
};

export const { Provider, Context } = createDataContext(
  reducer,
  { SignUp, SignIn, automaticLogin, SignOut },
  { signedIn: false }
);
