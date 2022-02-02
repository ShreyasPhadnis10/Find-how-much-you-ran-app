import createDataContext from "./createDataContext";
import tracks from "../api/tracks";

const reducer = (state, action) => {
  switch (action.type) {
    case "getTracks": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const createTracks = (dispatch) => {
  return async ({ name, location }) => {
    await tracks.post("/track", { name, location });
  };
};

const getTracks = (dispatch) => {
  return async () => {
    const response = await tracks.get("/track");
    dispatch({ type: "getTracks", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { createTracks, getTracks },
  []
);
