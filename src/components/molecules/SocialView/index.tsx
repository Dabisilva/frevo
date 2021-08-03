import React from "react";

import { View } from "react-native";
import { useRem } from "responsive-native";
import { FacebookButton } from "../../atoms/Buttons/FacebookButton";
import { GoogleButton } from "../../atoms/Buttons/GoogleButton";

import { styles } from "./styles";

export function SocialView() {
  const rem = useRem();
  return (
    <View
      style={[
        styles.socialLogIn,
        { width: rem(10, true), marginTop: rem(5, true) },
      ]}
    >
      <GoogleButton />
      <FacebookButton />
    </View>
  );
}
