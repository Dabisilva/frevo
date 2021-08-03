import React from "react";

import { Text, View } from "react-native";
import MapView, {
  Callout,
  Marker,
  MapViewProps,
  Region,
} from "react-native-maps";
import { useRem } from "responsive-native";
import { theme } from "../../../theme";
import { MarkerTolltip } from "../../organisms/MarkerTolltip";

import { styles } from "./styles";

interface MapViewHomeProps extends MapViewProps {
  location: Region | undefined;
}

export function MapViewHome({ location, ...rest }: MapViewHomeProps) {
  const rem = useRem();

  const EdgePadding = {
    bottom: rem(2, true),
    top: rem(1, true),
    left: 0,
    right: 0,
  };
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
  return (
    <MapView
      region={location}
      showsUserLocation
      loadingEnabled={true}
      followsUserLocation
      mapPadding={EdgePadding}
      style={styles.container}
      {...rest}
    >
      <MarkerTolltip
        latitudeInt={-15.632405}
        longitudeInt={-47.650217}
        description={description}
      />
    </MapView>
  );
}
