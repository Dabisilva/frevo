import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Constants, requestCameraPermissionsAsync } from "expo-camera";

import { styles } from "./styles";
export function Camera() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  return <View style={styles.container}></View>;
}
