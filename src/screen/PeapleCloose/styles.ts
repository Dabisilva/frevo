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
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  peapleCard: {
    backgroundColor: theme.colors.gray15,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 20,
    marginBottom: 20,
  },
  imageContainer: {},
  inviteContent: {
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.colors.white,
  },
  inviteText: {},
  name: {},
});
