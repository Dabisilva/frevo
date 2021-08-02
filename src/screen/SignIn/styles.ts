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
  createProfile: {
    backgroundColor: theme.colors.gray10,
    alignItems: "center",
    justifyContent: "center",
  },
  createProfileText: {
    color: theme.colors.gray20,
    fontFamily: theme.fonts.title500,
  },
  logIn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray10,
  },
  logInText: {
    color: theme.colors.gray20,
  },
  socialLogIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
