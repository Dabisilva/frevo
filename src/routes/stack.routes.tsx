import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screen/SignIn";
import { Home } from "../screen/Home";
import { Profile } from "../screen/Profile";
import { CreateProfile } from "../screen/CreateProfile";

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: string;
      Home: string;
      Profile: string;
    }
  }
}

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        animationTypeForReplace: "pop",
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="CreateProfile" component={CreateProfile} />
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
