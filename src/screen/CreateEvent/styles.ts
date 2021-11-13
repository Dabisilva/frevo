import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.red10,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
  },
  containerTop: {
    backgroundColor: theme.colors.gray15,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
  },
  imageContent: {
    backgroundColor: theme.colors.gray10,
  },
  title: {},
  picturesContainer: {},
  picturesText: {},
  image: {
    borderRadius: 8,
  },
  switchContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    marginRight: 10,
  },
});
