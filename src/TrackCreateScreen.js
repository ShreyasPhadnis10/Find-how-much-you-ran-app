import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import { requestForegroundPermissionsAsync } from "expo-location";
import Maps from "./components/Maps";

export default function TrackCreateScreen() {
  const startTracking = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("not granted");
      }
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
