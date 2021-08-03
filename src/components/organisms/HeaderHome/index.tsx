import React from "react";

import { Text, View, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useRem } from "responsive-native";
import { OptionButton } from "../../atoms/Buttons/OptionButton";
import { SearchInput } from "../../atoms/Inputs/SearchInput";

import { styles } from "./styles";

export function HeaderHome() {
  const rem = useRem();
  return (
    <View style={[styles.header, { top: rem(3, true) }]}>
      <SearchInput placeholder="Pesquisar festas" />

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={[
            styles.listTypes,
            {
              paddingHorizontal: rem(1, true),
              marginTop: rem(1, true),
            },
          ]}
        >
          <OptionButton text="teste 1" />
          <OptionButton text="teste teste" />
          <OptionButton text="teste 1" />
          <OptionButton text="teste 1" />
        </View>
      </ScrollView>
    </View>
  );
}
