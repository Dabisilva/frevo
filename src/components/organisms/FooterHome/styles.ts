import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  search: {
    alignItems: "center",
    justifyContent: "center",
  },

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
