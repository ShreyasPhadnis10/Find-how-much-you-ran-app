// import "../DoNotadd/FakeLocation";
import React, { useEffect, useContext, useState } from "react";
import { View, Dimensions, Text } from "react-native";

import Maps from "./components/Maps";
import { Context as LocationContext } from "../Context/LocationContext";
import useLocation from "../hooks/useLocation";

export default function TrackCreateScreen() {
  const { startRecording } = useContext(LocationContext);

  const [err] = useLocation((location) => startRecording(location));

  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ height: height, width: width, flex: 1 }}>
      <Maps />
      {err ? <Text>{err}</Text> : null}
    </View>
  );
}
