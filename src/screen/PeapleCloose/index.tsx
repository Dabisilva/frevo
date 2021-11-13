import React from "react";
import { Image, Text, View } from "react-native";
import { useRem } from "responsive-native";
import { styles } from "./styles";

export function PeapleCloose() {
  const rem = useRem();
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
        <View
          style={[
            styles.peapleCard,
            {
              width: rem(10),
              height: rem(15, true),
            },
          ]}
        >
          <View
            style={[
              styles.imageContainer,
              {
                height: rem(11, true),
              },
            ]}
          >
            <Image source={{}} />
          </View>
          <View
            style={[
              styles.inviteContent,
              {
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={styles.inviteText}>Convidar</Text>
          </View>
          <Text style={styles.name}>victor 21 anos </Text>
        </View>
        <View
          style={[
            styles.peapleCard,
            {
              width: rem(10),
              height: rem(15, true),
            },
          ]}
        >
          <View
            style={[
              styles.imageContainer,
              {
                height: rem(11, true),
              },
            ]}
          >
            <Image source={{}} />
          </View>
          <View
            style={[
              styles.inviteContent,
              {
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={styles.inviteText}>Convidar</Text>
          </View>
          <Text style={styles.name}>victor 21 anos </Text>
        </View>
        <View
          style={[
            styles.peapleCard,
            {
              width: rem(10),
              height: rem(15, true),
            },
          ]}
        >
          <View
            style={[
              styles.imageContainer,
              {
                height: rem(11, true),
              },
            ]}
          >
            <Image source={{}} />
          </View>
          <View
            style={[
              styles.inviteContent,
              {
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={styles.inviteText}>Convidar</Text>
          </View>
          <Text style={styles.name}>victor 21 anos </Text>
        </View>
      </View>
    </View>
  );
}
