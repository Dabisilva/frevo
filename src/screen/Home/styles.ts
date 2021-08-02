import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    alignItems: "center",
    marginTop: getStatusBarHeight(),
  },
  map: {
    flex: 1,
  },
  calloutContainer: {
    justifyContent: "center",
    backgroundColor: theme.colors.callout,
  },
  footer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profile: {
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
});
