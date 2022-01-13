//for testing purposes only

import * as Location from "expo-location";

const tendegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 0,
      altitude: 0,
      longitude: 73.7784405 + increment * tendegrees,
      latitude: 18.6157091 + increment * tendegrees,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });

  counter++;
}, 1000);
