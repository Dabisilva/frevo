import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { useRem } from "responsive-native";
import { theme } from "../../theme";

export function InputLogIn({ ...rest }: TextInputProps) {
  const rem = useRem();
  return (
    <TextInput
      {...rest}
      placeholderTextColor={theme.colors.gray20}
      style={[
        styles.input,
        {
          width: rem(18, true),
          height: rem(2.5, true),
          marginTop: rem(1.5, true),
          paddingLeft: rem(2, true),
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.gray10,
  },
});
