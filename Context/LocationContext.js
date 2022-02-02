import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "currentLocation": {
      return { ...state, currentLocation: action.payload };
    }

    case "startRecording": {
      return { ...state, recording: true };
    }

    case "stopRecording": {
      return { ...state, recording: false };
    }

    case "addLocation": {
      return { ...state, location: [...state.location, action.payload] };
    }

    case "AddName": {
      return { ...state, name: action.payload };
    }

    case "clear": {
      return { ...state, name: "", location: [] };
    }

    case "err": {
      return { ...state, err: action.payload };
    }

    case "cleanErr": {
      return { ...state, err: "" };
    }

    default:
      return state;
  }
};

const addName = (dispatch) => {
  return (name) => {
    dispatch({ type: "AddName", payload: name });
  };
};

const startRecording = (dispatch) => {
  return () => {
    dispatch({ type: "startRecording" });
  };
};

const stopRecording = (dispatch) => {
  return () => {
    dispatch({ type: "stopRecording" });
  };
};

const addLocation = (dispatch) => {
  return (location, recording) => {
    dispatch({ type: "currentLocation", payload: location });

    if (recording) {
      dispatch({ type: "addLocation", payload: location });
    }
  };
};

const clearLocation = (dispatch) => {
  return () => {
    dispatch({ type: "clear" });
  };
};

const errLocation = (dispatch) => {
  return () => {
    dispatch({ type: "err", payload: "Plz add your name or location" });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    addName,
    clearLocation,
    errLocation,
  },
  { location: [], currentLocation: null, recording: false, name: "", err: "" }
);
