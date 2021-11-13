import React, { useState } from "react";
import {
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRem } from "responsive-native";
import { AntDesign } from "@expo/vector-icons";

import { theme } from "../../theme";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CreateEvent() {
  const rem = useRem();
  const navigation = useNavigation();

  const [isEnabledWhoIsInTheParty, setIsEnabledWhoIsInTheParty] =
    useState(false);
  const toggleSwitch = () =>
    setIsEnabledWhoIsInTheParty(!isEnabledWhoIsInTheParty);
  const [isEnabledInvite, setIsEnabledInvite] = useState(false);
  const toggleSwitchInvite = () => setIsEnabledInvite(!isEnabledInvite);

  const [isEnabledMoney, setIsEnabledMoney] = useState(false);
  const toggleSwitchMoney = () => setIsEnabledMoney(!isEnabledMoney);

  function handlePress() {
    navigation.navigate("PeapleCloose");
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
        <View
          style={[
            styles.containerTop,
            {
              height: rem(24, true),
              padding: rem(1, true),
              marginBottom: rem(1, true),
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
            <View
              style={[
                styles.imageContent,
                {
                  width: rem(5, true),
                  height: rem(5, true),
                  borderRadius: rem(4, true),
                  marginRight: rem(1, true),
                },
              ]}
            >
              <Image
                style={{
                  width: rem(5, true),
                  height: rem(5, true),
                  borderRadius: rem(4, true),
                }}
                source={{}}
              />
            </View>
            <View>
              <Text style={styles.title}>Nome da festa</Text>
              <TextInput placeholder="Descreva o evento e as atrações" />
            </View>
          </View>
          <View style={styles.picturesContainer}>
            <Text
              style={[
                styles.picturesText,
                {
                  marginBottom: rem(1, true),
                  fontSize: rem(1, true),
                },
              ]}
            >
              Fotos do ambiente
            </Text>

            <Image
              style={[
                styles.image,
                {
                  width: rem(8, true),
                  height: rem(12, true),
                },
              ]}
              source={{
                uri: "http://www.buffetespacofesta.com.br/imagens/local-de-festa-para-empresa-preco.jpg",
              }}
            />
          </View>
        </View>

        <View style={styles.switchContainer}>
          <Switch
            trackColor={{
              false: theme.colors.gray20,
              true: theme.colors.green,
            }}
            thumbColor={
              isEnabledWhoIsInTheParty ? theme.colors.gray25 : "#f4f3f4"
            }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabledWhoIsInTheParty}
          />
          <Text>Mostrar quem está na festa</Text>
        </View>

        <View style={styles.switchContainer}>
          <Switch
            trackColor={{
              false: theme.colors.gray20,
              true: theme.colors.green,
            }}
            thumbColor={isEnabledInvite ? theme.colors.gray25 : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchInvite}
            value={isEnabledInvite}
          />
          <Text>Entrada com convite </Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{
              false: theme.colors.gray20,
              true: theme.colors.green,
            }}
            thumbColor={isEnabledMoney ? theme.colors.gray25 : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchMoney}
            value={isEnabledMoney}
          />
          <Text>Evento monetizado</Text>
        </View>

        <TouchableOpacity
          onPress={handlePress}
          style={[
            styles.button,
            {
              marginTop: rem(5, true),
            },
          ]}
        >
          <>
            <Text>Convidados por perto</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
}
