import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calloutContainer: {
    justifyContent: "center",
    backgroundColor: theme.colors.callout,
  },
  calloutText: {
    color: theme.colors.gray20,
    fontFamily: theme.fonts.title700,
  },
});
