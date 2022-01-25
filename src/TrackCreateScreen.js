import "../DoNotadd/FakeLocation";
import React, { useEffect, useContext, useState, useCallback } from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";

import Maps from "./components/Maps";
import { Context as LocationContext } from "../Context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "./components/TrackForm";
import { withNavigationFocus } from "react-navigation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording, location },
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => addLocation(location, recording),
    [recording]
  );

  const [err] = useLocation(callback, isFocused);

  // console.log(location.length);

  return (
    <View style={{ flex: 1 }}>
      <Maps />
      <TrackForm />
      {err ? <Text>{err}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
