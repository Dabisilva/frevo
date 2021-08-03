import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { ScreenProvider } from "responsive-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <SafeAreaProvider>
        <ScreenProvider baseFontSize={13}>
          <Routes />
          <StatusBar style="dark" backgroundColor="transparent" />
        </ScreenProvider>
      </SafeAreaProvider>
    </>
  );
}
