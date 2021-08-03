import React from "react";
import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import { useRem } from "responsive-native";
import { theme } from "../../../theme";

export function SearchInput({ ...rest }: TextInputProps) {
  const rem = useRem();
  return (
    <View style={[styles.container, { paddingHorizontal: rem(2, true) }]}>
      <TextInput
        {...rest}
        style={[
          styles.input,
          {
            height: rem(3, true),
            width: rem(22, true),
            borderRadius: rem(2, true),
            fontSize: rem(1, true),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: theme.colors.overlay,
    textAlign: "center",
  },
});
