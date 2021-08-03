import React from "react";

import { TouchableWithoutFeedback } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../../../theme";
import { useRem } from "responsive-native";

export function FacebookButton() {
  const rem = useRem();
  return (
    <TouchableWithoutFeedback>
      <FontAwesome5
        name="facebook"
        size={rem(3, true)}
        color={theme.colors.facebook}
      />
    </TouchableWithoutFeedback>
  );
}
