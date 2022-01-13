import React, { useEffect, useContext } from "react";
import { View, Dimensions } from "react-native";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Maps from "./components/Maps";
import { Context as LocationContext } from "../Context/LocationContext";

export default function TrackCreateScreen() {
  const { startRecording } = useContext(LocationContext);

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
        (location) => {
          startRecording(location);
        }
      );
    } catch (err) {
      console.log("There was some error while requesting location");
    }
  };

  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    startTracking();
  }, []);

  return (
    <View style={{ height: height, width: width, flex: 1 }}>
      <Maps />
    </View>
  );
}
