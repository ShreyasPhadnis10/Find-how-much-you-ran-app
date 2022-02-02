import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../Context/SaveLocationContext";
import MapView from "react-native-maps";

export default function TrackSingleDetailScreen({ navigation }) {
  const { state } = useContext(LocationContext);

  const id = navigation.getParam("id");

  const track = state.find((t) => t._id === id);

  return (
    <View>
      <Text>{track.name}</Text>
      <MapView></MapView>
    </View>
  );
}
