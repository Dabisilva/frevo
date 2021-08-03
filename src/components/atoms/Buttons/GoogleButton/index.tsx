import React from "react";

import { TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { theme } from "../../../../theme";
import { useRem } from "responsive-native";

export function GoogleButton() {
  const rem = useRem();
  return (
    <TouchableWithoutFeedback>
      <AntDesign
        name="google"
        size={rem(3, true)}
        color={theme.colors.google}
      />
    </TouchableWithoutFeedback>
  );
}
