import React, { useContext } from "react";
import MapView, { Circle } from "react-native-maps";
import {
  View,
  Button,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import { Context as LocationContext } from "../../Context/LocationContext";
import TrackForm from "./TrackForm";

export default function Maps() {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return null;
  }

  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ backgroundColor: "yellow", height: "80%" }}>
      <MapView
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{
          height: "100%",
          width: width,
          backgroundColor: "blue",
        }}
        showsUserLocation
        loadingEnabled
      >
        {/* <Circle
          radius={20}
          center={{ ...currentLocation.coords }}
          strokeColor="#FF7F7F"
          strokeWidth={6}
          fillColor="#FF7F7F"
        /> */}
      </MapView>
    </View>
  );
}
