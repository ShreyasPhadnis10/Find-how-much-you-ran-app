import React, { useContext } from "react";
import MapView, { Circle } from "react-native-maps";
import { View, Button, Dimensions, ActivityIndicator } from "react-native";
import { Context as LocationContext } from "../../Context/LocationContext";

export default function Maps() {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <MapView
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ height: height, width: width }}
        // showsUserLocation
        showsMyLocationButton={false}
        loadingEnabled
      >
        <Circle
          radius={20}
          center={{ ...currentLocation.coords }}
          strokeColor="#FF7F7F"
          strokeWidth={6}
          fillColor="#FF7F7F"
        />
      </MapView>
    </View>
  );
}
