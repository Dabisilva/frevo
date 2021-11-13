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
  eventCard: {
    backgroundColor: theme.colors.gray10,
    flexDirection: "row",
    borderRadius: 8,
  },
  imageContainer: {
    backgroundColor: theme.colors.gray15,
  },
  textContainer: {},
  name: {},
  description: {},
});
