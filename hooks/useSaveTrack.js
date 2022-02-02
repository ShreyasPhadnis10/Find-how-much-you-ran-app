import React, { useContext } from "react";
import { Context as LocationContext } from "../Context/LocationContext";
import { Context as SavingContext } from "../Context/SaveLocationContext";

export default () => {
  const {
    state: { name, location },
    clearLocation,
    errLocation,
  } = useContext(LocationContext);

  const { createTracks } = useContext(SavingContext);

  const savePost = async () => {
    if (!name || !location) {
      errLocation();
    } else {
      await createTracks({ name, location });

      clearLocation();
    }
  };

  return { savePost };
};
