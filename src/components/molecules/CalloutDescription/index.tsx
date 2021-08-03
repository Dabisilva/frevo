import React from "react";

import { View } from "react-native";
import { Callout, MapCalloutProps } from "react-native-maps";
import { useRem } from "responsive-native";
import { TextOneRem } from "../../atoms/TextOneRem";

import { styles } from "./styles";

interface CalloutDescriptionProps extends MapCalloutProps {
  description: string | undefined;
}

export function CalloutDescription({
  description,
  ...rest
}: CalloutDescriptionProps) {
  const rem = useRem();
  return (
    <Callout tooltip {...rest}>
      <View
        style={[
          styles.calloutContainer,
          {
            height: rem(10, true),
            width: rem(10, true),
            padding: rem(1, true),
            borderRadius: rem(1, true),
          },
        ]}
      >
        <TextOneRem>{description}</TextOneRem>
      </View>
    </Callout>
  );
}
