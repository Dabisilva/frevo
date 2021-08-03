import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    width: "100%",
  },
  content: {
    alignItems: "center",
    marginTop: getStatusBarHeight(),
  },
  imageBackground: {
    backgroundColor: theme.colors.gray10,
    alignItems: "center",
    justifyContent: "center",
  },
  textName: {
    color: theme.colors.gray20,
    fontFamily: theme.fonts.title700,
  },
  descriptionContainer: {
    backgroundColor: theme.colors.gray10,
  },
  descriptionTextContainer: {},
  description: {
    color: theme.colors.gray20,
    fontFamily: theme.fonts.title500,
    textAlign: "left",
  },
  imagesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
});
