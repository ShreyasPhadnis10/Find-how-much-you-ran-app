import React, { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (callback) => {
  const [err, setErr] = useState("");

  const startTracking = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("not granted");
      }

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          distanceInterval: 10,
          timeInterval: 1000,
        },
        callback
      );
    } catch (err) {
      setErr("Plz turn location on for the app to function");
    }
  };

  useEffect(() => {
    startTracking();
  }, []);

  return [err];
};
