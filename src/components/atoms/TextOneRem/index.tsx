import React, { ReactNode } from "react";
import { Text, TextProps } from "react-native";
import { useRem } from "responsive-native";

import { styles } from "./styles";

interface TextOneRemProps extends TextProps {
  children: ReactNode;
}

export function TextOneRem({ children, ...rest }: TextOneRemProps) {
  const rem = useRem();
  return (
    <Text {...rest} style={[styles.text, { fontSize: rem(1, true) }]}>
      {children}
    </Text>
  );
}
