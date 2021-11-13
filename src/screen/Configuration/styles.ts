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
  header: {
    width: "100%",
  },
  title: {
    color: theme.colors.gray20,
  },
  categorysContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  category: {
    backgroundColor: theme.colors.gray25,
    borderRadius: 8,
  },
  textCategory: {},
  switchContainer: {},
  switchContent: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
});
