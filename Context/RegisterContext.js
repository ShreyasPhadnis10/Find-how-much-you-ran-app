import React from "react";
import createDataContext from "./createDataContext";
import tracks from "../api/tracks";

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

      console.log({ token });
    } catch (err) {
      console.log("Something is wrong");
    }
  };
};

const SignIn = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await tracks.post("/signin", { email, password });

      const token = response.data.token;

      console.log({ token });
    } catch (err) {
      console.log("something is wrong ");
    }
  };
};

export const { Provider, Context } = createDataContext(
  reducer,
  { SignUp, SignIn },
  { signedIn: false }
);
