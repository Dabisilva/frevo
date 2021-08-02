import React, { useState } from "react";

import { View, Text, TouchableWithoutFeedback } from "react-native";
import { useRem } from "responsive-native";
import { RectButton } from "react-native-gesture-handler";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { InputLogIn } from "../../components/Inputs/inputLogIn";

import { styles } from "./styles";
import { theme } from "../../theme";

export function SignIn() {
  const rem = useRem();
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.content,
          {
            width: rem(22, true),
            height: rem(30, true),
          },
        ]}
      >
        <RectButton
          style={[
            styles.createProfile,
            {
              width: rem(15, true),
              height: rem(2, true),
              borderRadius: rem(1, true),
              marginTop: rem(2, true),
              marginBottom: rem(1, true),
            },
          ]}
        >
          <Text
            style={[
              styles.createProfileText,
              {
                fontSize: rem(1, true),
              },
            ]}
          >
            Faça seu perfil
          </Text>
        </RectButton>

        <InputLogIn
          placeholder="usuário"
          onChangeText={setUsername}
          value={username}
        />
        <InputLogIn
          placeholder="senha"
          onChangeText={setPassword}
          value={password}
        />

        <RectButton
          onPress={() => navigation.navigate("Home")}
          style={[
            styles.logIn,
            {
              width: rem(10, true),
              height: rem(2.6, true),
              borderRadius: rem(0.7, true),
              marginTop: rem(2, true),
            },
          ]}
        >
          <Text style={[styles.logInText, { fontSize: rem(1, true) }]}>
            Entrar
          </Text>
        </RectButton>

        <View
          style={[
            styles.socialLogIn,
            { width: rem(10, true), marginTop: rem(5, true) },
          ]}
        >
          <TouchableWithoutFeedback>
            <AntDesign
              name="google"
              size={rem(3, true)}
              color={theme.colors.google}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <FontAwesome5
              name="facebook"
              size={rem(3, true)}
              color={theme.colors.facebook}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
