import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screen/SignIn";
import { Home } from "../screen/Home";
import { Profile } from "../screen/Profile";
import { CreateProfile } from "../screen/CreateProfile";
import { CreateEvent } from "../screen/CreateEvent";
import { PeapleCloose } from "../screen/PeapleCloose";
import { Configuration } from "../screen/Configuration";
import { SearchEvents } from "../screen/SearchEvents";
import { Event } from "../screen/Event";

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: string;
      Home: string;
      Profile: string;
      CreateEvent: string;
      PeapleCloose: string;
      Configuration: string;
      SearchEvents: string;
      Event: string;
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
      <Screen name="CreateEvent" component={CreateEvent} />
      <Screen name="PeapleCloose" component={PeapleCloose} />
      <Screen name="Configuration" component={Configuration} />
      <Screen name="SearchEvents" component={SearchEvents} />
      <Screen name="Event" component={Event} />
    </Navigator>
  );
}
