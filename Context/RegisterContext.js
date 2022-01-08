import React from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const SignUp = (dispatch) => {
  return () => {
    console.log("Hi");
  };
};

// const SignIn = (dispatch) => {
//   return () => {};
// };

export const { Provider, Context } = createDataContext(
  reducer,
  { SignUp },
  { signedIn: false }
);
