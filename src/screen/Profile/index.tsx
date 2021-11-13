import React from "react";

import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useRem } from "responsive-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation();
  const rem = useRem();
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.content, { paddingVertical: rem(2, true) }]}>
        <View
          style={[
            styles.header,
            {
              paddingLeft: rem(2, true),
            },
          ]}
        >
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-sharp"
              size={rem(2, true)}
              color={theme.colors.gray20}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Configuration")}
          >
            <FontAwesome
              style={{ marginRight: rem(2, true) }}
              name="gear"
              size={rem(2, true)}
              color={theme.colors.gray20}
            />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={[
            styles.imageBackground,
            {
              width: rem(8.5, true),
              height: rem(8.5, true),
              borderRadius: rem(8.5, true),
            },
          ]}
        >
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/57877449?v=4",
            }}
            style={{
              width: rem(8, true),
              height: rem(8, true),
              borderRadius: rem(8, true),
            }}
          />
        </View>

        <Text
          style={[
            styles.textName,
            {
              fontSize: rem(1, true),
              marginVertical: rem(1, true),
            },
          ]}
        >
          Davi 20 anos
        </Text>

        <View
          style={[
            styles.descriptionContainer,
            {
              width: rem(22, true),
              padding: rem(1, true),
              borderRadius: rem(0.5, true),
            },
          ]}
        >
          <View
            style={[
              styles.descriptionTextContainer,
              { marginBottom: rem(1, true) },
            ]}
          >
            <Text style={[styles.description, { fontSize: rem(1, true) }]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              libero praesentium quae laudantium nam quos consequuntur quam
              officia facilis! Commodi aspernatur aliquam placeat nulla ullam
              velit facilis a eius deserunt.
            </Text>
          </View>
          <View style={[styles.imagesContainer, {}]}>
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/57877449?v=4",
              }}
              style={{
                width: rem(8.5, true),
                height: rem(8.5, true),
                marginLeft: rem(1, true),
                marginBottom: rem(1, true),
                borderRadius: rem(0.5, true),
              }}
            />
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/57877449?v=4",
              }}
              style={{
                width: rem(8.5, true),
                height: rem(8.5, true),
                marginLeft: rem(1, true),
                marginBottom: rem(1, true),
                borderRadius: rem(0.5, true),
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
