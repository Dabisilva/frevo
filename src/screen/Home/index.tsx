import React, { useEffect, useState } from "react";

import { View } from "react-native";
import * as Location from "expo-location";
import { Region } from "react-native-maps";

import { MapViewHome } from "../../components/templates/MapViewHome";

import { styles } from "./styles";
import { HeaderHome } from "../../components/organisms/HeaderHome";
import { FooterHome } from "../../components/organisms/FooterHome";

export function Home() {
  const [location, setLocation] = useState<Region>();
  const [search, setSearch] = useState("");

  async function getCurrentPosition() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});

    setLocation({
      latitude,
      longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    });
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <View style={styles.container}>
      <MapViewHome location={location} />
      <HeaderHome />
      <FooterHome />
    </View>
  );
}
