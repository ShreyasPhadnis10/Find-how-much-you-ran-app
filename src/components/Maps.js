import React from "react";
import MapView from "react-native-maps";
import { View, Button, Dimensions } from "react-native";

export default function Maps() {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 37.33233,
          longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ height: height, width: width }}
      ></MapView>
    </View>
  );
}
