import React from "react";
import MapView from "react-native-maps";
import { View, Button } from "react-native";

export default function Maps() {
  return (
    <View>
      <MapView style={{ height: 40, width: 1000 }}></MapView>
    </View>
  );
}
