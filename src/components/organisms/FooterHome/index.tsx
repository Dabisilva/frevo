import React from "react";

import { View } from "react-native";
import { useRem } from "responsive-native";

import { ProfileButton } from "../../molecules/ProfileButton";
import { EventButton } from "../../molecules/EventButton";

import { styles } from "./styles";

export function FooterHome() {
  const rem = useRem();
  return (
    <View style={[styles.footer, { height: rem(3, true) }]}>
      <ProfileButton />

      <EventButton />
    </View>
  );
}
