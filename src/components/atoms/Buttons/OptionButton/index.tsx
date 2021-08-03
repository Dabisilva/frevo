import React, { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { useRem } from "responsive-native";
import { TextOneRem } from "../../TextOneRem";

import { styles } from "./styles";

interface OptionButtonProps extends RectButtonProps {
  children?: ReactNode;
  text?: string;
}

export function OptionButton({ children, text, ...rest }: OptionButtonProps) {
  const rem = useRem();
  return (
    <RectButton
      {...rest}
      style={[
        styles.button,
        {
          paddingHorizontal: rem(1, true),
          marginRight: rem(1, true),
          borderRadius: rem(0.5, true),
        },
      ]}
    >
      <TextOneRem>{children || text}</TextOneRem>
    </RectButton>
  );
}
