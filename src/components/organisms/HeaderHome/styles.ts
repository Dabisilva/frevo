import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  header: {
    position: "absolute",
    alignItems: "center",
    marginTop: getStatusBarHeight(),
  },
  listTypes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
