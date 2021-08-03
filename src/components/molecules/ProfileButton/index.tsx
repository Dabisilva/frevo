import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { useRem } from "responsive-native";

import { styles } from "./styles";
import { TextOneRem } from "../../atoms/TextOneRem";

export function ProfileButton() {
  const navigation = useNavigation();
  const rem = useRem();
  return (
    <RectButton
      onPress={() => navigation.navigate("Profile")}
      style={[
        styles.profile,
        {
          marginBottom: rem(2, true),
          marginLeft: rem(2, true),
          width: rem(3, true),
          height: rem(3, true),
        },
      ]}
    >
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
      <TextOneRem>Perfil</TextOneRem>
    </RectButton>
  );
}
