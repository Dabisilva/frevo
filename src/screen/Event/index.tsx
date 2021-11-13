import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Text, View } from "react-native";
import { useRem } from "responsive-native";
import { styles } from "./styles";

export function Event() {
  const rem = useRem();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: rem(1, true),
          paddingVertical: rem(2, true),
          paddingTop: rem(8, true),
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
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={[
              styles.imageUserContainer,
              {
                marginTop: -rem(4, true),
                marginBottom: rem(1, true),
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

          <Text style={{ marginBottom: rem(2, true) }}>Social da marques</Text>
        </View>

        <View style={styles.cardsContainer}>
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
                  width: rem(5, true),
                  height: rem(5, true),
                  borderRadius: rem(4, true),
                },
              ]}
            >
              <Image
                style={{
                  width: rem(5, true),
                  height: rem(5, true),
                  borderRadius: rem(5, true),
                }}
                source={{}}
              />
            </View>
            <View
              style={[
                styles.textContainer,
                {
                  marginLeft: rem(1, true),
                  maxWidth: rem(13, true),
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
        </View>
      </View>
    </View>
  );
}
