import React, { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (callback, Track) => {
  const [err, setErr] = useState("");
  const [sub, setSub] = useState(null);

  const startTracking = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("not granted");
      }

      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          distanceInterval: 10,
          timeInterval: 1000,
        },
        callback
      );

      setSub(subscriber);
    } catch (err) {
      setErr("Plz turn location on for the app to function");
    }
  };

  useEffect(() => {
    if (Track) {
      startTracking();
    } else {
      if (sub) {
        sub.remove();
        setSub(null);
      }
    }

    return () => {
      if (sub) {
        sub.remove();
      }
    };
  }, [Track, callback]);

  return [err];
};
