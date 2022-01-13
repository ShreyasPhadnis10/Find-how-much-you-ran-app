import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "currentLocation":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => {
  return (location) => {
    dispatch({ type: "currentLocation", payload: location });
  };
};

const stopTracking = (dispatch) => {
  return () => {};
};

const addLocation = (dispatch) => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  reducer,
  { startRecording, stopTracking, addLocation },
  { location: {}, currentLocation: null, recording: false }
);
