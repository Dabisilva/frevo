import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Switch, Text, TouchableWithoutFeedback, View } from "react-native";
import { useRem } from "responsive-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { styles } from "./styles";

export function Configuration() {
  const navigation = useNavigation();
  const rem = useRem();
  const [isEnabledNotiication, setIsEnabledNotiication] = useState(false);
  const toggleSwitchNotiication = () =>
    setIsEnabledNotiication(!isEnabledNotiication);
  const [isEnabledShowAnouncemants, setIsEnabledShowAnouncemants] =
    useState(false);
  const toggleSwitchShowAnouncemants = () =>
    setIsEnabledShowAnouncemants(!isEnabledShowAnouncemants);

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
            styles.header,
            {
              marginBottom: rem(1, true),
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
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={[styles.title, { fontSize: rem(1, true) }]}>
            Configurações
          </Text>
        </View>

        <View
          style={[
            styles.categorysContent,
            {
              marginVertical: rem(2, true),
            },
          ]}
        >
          <View
            style={[
              styles.category,
              {
                paddingHorizontal: rem(1, true),
                marginRight: rem(1, true),
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={[styles.textCategory]}>Rap</Text>
          </View>
          <View
            style={[
              styles.category,
              {
                paddingHorizontal: rem(1, true),
                marginRight: rem(1, true),
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={[styles.textCategory]}>Rock</Text>
          </View>
          <View
            style={[
              styles.category,
              {
                paddingHorizontal: rem(1, true),
                marginRight: rem(1, true),
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={[styles.textCategory]}>Pagode</Text>
          </View>
          <View
            style={[
              styles.category,
              {
                paddingHorizontal: rem(1, true),
                marginRight: rem(1, true),
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={[styles.textCategory]}>Indie</Text>
          </View>
          <View
            style={[
              styles.category,
              {
                paddingHorizontal: rem(1, true),
                marginRight: rem(1, true),
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={[styles.textCategory]}>Forró</Text>
          </View>
          <View
            style={[
              styles.category,
              {
                paddingHorizontal: rem(1, true),
                marginRight: rem(1, true),
                marginBottom: rem(1, true),
              },
            ]}
          >
            <Text style={[styles.textCategory]}>Funk</Text>
          </View>
        </View>

        <View style={[styles.switchContainer]}>
          <View style={[styles.switchContent]}>
            <Switch
              trackColor={{
                false: theme.colors.gray20,
                true: theme.colors.green,
              }}
              thumbColor={
                isEnabledNotiication ? theme.colors.gray25 : "#f4f3f4"
              }
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchNotiication}
              value={isEnabledNotiication}
            />
            <Text>Receber notificaçoes de festas por perto </Text>
          </View>
          <View style={[styles.switchContent]}>
            <Switch
              trackColor={{
                false: theme.colors.gray20,
                true: theme.colors.green,
              }}
              thumbColor={
                isEnabledShowAnouncemants ? theme.colors.gray25 : "#f4f3f4"
              }
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchShowAnouncemants}
              value={isEnabledShowAnouncemants}
            />
            <Text>Mostrar anunciantes de evento </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
