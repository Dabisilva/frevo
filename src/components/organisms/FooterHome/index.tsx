import React from "react";

import { View } from "react-native";
import { useRem } from "responsive-native";

import { ProfileButton } from "../../molecules/ProfileButton";
import { EventButton } from "../../molecules/EventButton";

import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { TextOneRem } from "../../atoms/TextOneRem";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/core";
import { theme } from "../../../theme";

export function FooterHome() {
  const navigation = useNavigation();
  const rem = useRem();

  function handlePress() {
    navigation.navigate("SearchEvents");
  }
  return (
    <View style={[styles.footer, { marginBottom: -rem(2, true) }]}>
      <View
        style={[
          styles.createEvent,
          { margin: rem(1, true), marginBottom: rem(3, true) },
        ]}
      >
        <RectButton
          onPress={handlePress}
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
            name="search"
            size={rem(2, true)}
            color={theme.colors.gray20}
          />
        </RectButton>
        <TextOneRem>Buscar</TextOneRem>
      </View>
      <ProfileButton />

      <EventButton />
    </View>
  );
}
