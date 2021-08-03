import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { useRem } from "responsive-native";
import { TextOneRem } from "../../TextOneRem";

import { styles } from "./styles";

export function SignInButton() {
  const navigation = useNavigation();
  const rem = useRem();
  return (
    <RectButton
      onPress={() => navigation.navigate("Home")}
      style={[
        styles.logIn,
        {
          width: rem(10, true),
          height: rem(2.6, true),
          borderRadius: rem(0.7, true),
          marginTop: rem(2, true),
        },
      ]}
    >
      <TextOneRem>Entrar</TextOneRem>
    </RectButton>
  );
}
