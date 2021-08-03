import React from "react";

import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { useRem } from "responsive-native";

import { TextOneRem } from "../../TextOneRem";

import { styles } from "./styles";

export function CreateProfile() {
  const navigation = useNavigation();
  const rem = useRem();
  return (
    <RectButton
      style={[
        styles.createProfile,
        {
          width: rem(15, true),
          height: rem(2.5, true),
          borderRadius: rem(0.5, true),
          marginTop: rem(1, true),
          marginBottom: rem(1, true),
        },
      ]}
    >
      <TextOneRem>Faça seu perfil</TextOneRem>
    </RectButton>
  );
}
