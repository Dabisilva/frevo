import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  createEvent: {
    alignItems: "center",
  },
  buttonAdd: {
    backgroundColor: theme.colors.overlay,
    alignItems: "center",
    justifyContent: "center",
  },
  createEventText: {
    color: theme.colors.gray20,
    fontFamily: theme.fonts.title500,
  },
});
