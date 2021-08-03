import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.overlay,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.gray20,
    fontFamily: theme.fonts.text400,
  },
});
