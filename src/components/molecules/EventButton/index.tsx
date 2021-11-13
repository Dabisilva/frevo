import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useRem } from "responsive-native";
import { theme } from "../../../theme";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";
import { TextOneRem } from "../../atoms/TextOneRem";

export function EventButton() {
  const navigation = useNavigation();
  const rem = useRem();

  function handlePress() {
    navigation.navigate("CreateEvent");
  }
  return (
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
          name="plus"
          size={rem(2, true)}
          color={theme.colors.gray20}
        />
      </RectButton>
      <TextOneRem>Criar Evento</TextOneRem>
    </View>
  );
}
