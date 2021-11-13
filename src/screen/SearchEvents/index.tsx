import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRem } from "responsive-native";
import { styles } from "./styles";

export function SearchEvents() {
  const rem = useRem();
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Event");
  }
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: rem(1, true),
          paddingVertical: rem(2, true),
        },
      ]}
    >
      <View
        style={[
          styles.content,
          {
            paddingHorizontal: rem(1, true),
            paddingVertical: rem(2, true),
          },
        ]}
      >
        <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
          <View
            style={[
              styles.eventCard,
              {
                padding: rem(1, true),
              },
            ]}
          >
            <View
              style={[
                styles.imageContainer,
                {
                  width: rem(8, true),
                  height: rem(8, true),
                  borderRadius: rem(4, true),
                },
              ]}
            >
              <Image
                style={{
                  width: rem(8, true),
                  height: rem(8, true),
                  borderRadius: rem(8, true),
                }}
                source={{}}
              />
            </View>
            <View
              style={[
                styles.textContainer,
                {
                  marginLeft: rem(1, true),
                  maxWidth: rem(11, true),
                },
              ]}
            >
              <Text
                style={[
                  styles.name,
                  { fontSize: rem(1, true), marginBottom: rem(0.5, true) },
                ]}
              >
                Davi
              </Text>
              <Text style={[styles.description]}>
                rolezada com os verdadeiro apenas
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
