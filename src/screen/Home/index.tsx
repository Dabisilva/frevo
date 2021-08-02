import React, { useEffect, useState } from "react";

import { View, Text, Image } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, Callout, Region } from "react-native-maps";
import { useRem } from "responsive-native";
import { FontAwesome } from "@expo/vector-icons";

import { SearchInput } from "../../components/Inputs/SearchInput";

import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../theme";

export function Home() {
  const rem = useRem();
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
      latitudeDelta: 100,
      longitudeDelta: 100,
    });
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        region={location}
        showsUserLocation
        loadingEnabled={true}
        //showsMyLocationButton={false}
        followsUserLocation
        style={[styles.map, { padding: rem(1, true) }]}
      >
        <Marker
          coordinate={{
            latitude: -15.632405,
            longitude: -47.650217,
          }}
          calloutAnchor={{
            x: 4,
            y: 4,
          }}
        >
          <Callout tooltip>
            <View
              style={[
                styles.calloutContainer,
                {
                  height: rem(10, true),
                  width: rem(10, true),
                  padding: rem(1, true),
                  borderRadius: rem(1, true),
                },
              ]}
            >
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={[styles.header, { top: rem(2, true) }]}>
        <SearchInput placeholder="Pesquisar festas" />
      </View>
      <View style={[styles.footer, { height: rem(3, true) }]}>
        <RectButton style={[styles.profile, { marginBottom: rem(1, true) }]}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/57877449?v=4",
            }}
            style={{
              width: rem(3, true),
              height: rem(3, true),
              borderRadius: rem(3, true),
            }}
          />
          <Text>Perfil</Text>
        </RectButton>

        <View
          style={[
            styles.createEvent,
            { margin: rem(1, true), marginBottom: rem(3, true) },
          ]}
        >
          <RectButton
            style={[
              styles.buttonAdd,
              {
                width: rem(3, true),
                height: rem(3, true),
                borderRadius: rem(3, true),
              },
            ]}
          >
            <FontAwesome
              name="plus"
              size={rem(2, true)}
              color={theme.colors.gray20}
            />
          </RectButton>
          <Text>Criar Evento</Text>
        </View>
      </View>
    </View>
  );
}
