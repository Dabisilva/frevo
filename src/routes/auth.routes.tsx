import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screen/SignIn";
import { CreateProfile } from "../screen/CreateProfile";

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: string;
      CreateProfile: string;
    }
  }
}

export function AuthRoutes() {
  return (
    <Navigator
      defaultScreenOptions={{
        animationTypeForReplace: "pop",
      }}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="CreateProfile" component={CreateProfile} />
    </Navigator>
  );
}
