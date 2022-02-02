import React, { useContext } from "react";
import MapView, { Circle, Polyline } from "react-native-maps";
import { View, Dimensions, Text } from "react-native";
import { Context as LocationContext } from "../../Context/LocationContext";
import TrackForm from "./TrackForm";
import Saving from "./Saving";

export default function Maps() {
  const {
    state: { currentLocation, location },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return null;
  }

  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ height: "75%" }}>
      <MapView
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{
          height: "100%",
          width: width,
        }}
        // showsUserLocation
        loadingEnabled
      >
        <Circle
          radius={20}
          center={{ ...currentLocation.coords }}
          strokeColor="#FF7F7F"
          strokeWidth={6}
          fillColor="#FF7F7F"
        />

        <Polyline
          coordinates={location.map((loc) => loc.coords)}
          strokeWidth={5}
        />
      </MapView>
    </View>
  );
}
