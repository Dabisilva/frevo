import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.red10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: theme.colors.white,
    alignItems: "center",
  },
  socialLogIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
