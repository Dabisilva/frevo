import React from "react";

import { Marker } from "react-native-maps";
import { theme } from "../../../theme";
import { CalloutDescription } from "../../molecules/CalloutDescription";

interface MarkerTolltipProps {
  latitudeInt: number;
  longitudeInt: number;
  description?: string;
}

export function MarkerTolltip({
  latitudeInt,
  longitudeInt,
  description,
}: MarkerTolltipProps) {
  return (
    <Marker
      pinColor={theme.colors.yellow400}
      coordinate={{
        latitude: latitudeInt,
        longitude: longitudeInt,
      }}
      calloutAnchor={{
        x: 4,
        y: 1,
      }}
    >
      <CalloutDescription description={description} />
    </Marker>
  );
}
