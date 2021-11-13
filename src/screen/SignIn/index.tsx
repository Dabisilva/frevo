import React, { useState } from "react";

import { View } from "react-native";
import { useRem } from "responsive-native";
import { styles } from "./styles";
import { InputLogIn } from "../../components/atoms/Inputs/inputLogIn";
import { SignInButton } from "../../components/atoms/Buttons/SignInButton";
import { CreateProfileButton } from "../../components/atoms/Buttons/CreateProfileButton";
import { SocialView } from "../../components/molecules/SocialView";

export function SignIn() {
  const rem = useRem();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={[styles.container, { paddingTop: rem(4, true) }]}>
      <View
        style={[
          styles.content,
          {
            width: rem(22, true),
            height: rem(35, true),
            borderRadius: rem(0.5, true),
            paddingTop: rem(2, true),
          },
        ]}
      >
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

        <SignInButton />

        <CreateProfileButton />

        <SocialView />
      </View>
    </View>
  );
}
