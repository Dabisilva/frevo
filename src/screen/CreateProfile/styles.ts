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
  photoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageNull: {
    backgroundColor: theme.colors.gray10,
  },
  textPhoto: {
    color: theme.colors.gray20,
    fontFamily: theme.fonts.text400,
  },
  body: {
    flex: 1,
    backgroundColor: theme.colors.gray15,
    borderRadius: 8,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  legend: {
    color: theme.colors.gray20,
    fontFamily: theme.fonts.title500,
  },
  input: {
    height: 40,
    backgroundColor: theme.colors.gray10,
    marginTop: 5,
    borderRadius: 8,
    paddingLeft: 10,
  },
  textAreaContainer: {
    width: "100%",
    marginTop: 26,
  },
  textArea: {
    backgroundColor: theme.colors.gray10,
    marginTop: 5,
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.gray20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 8,
  },
  textButton: {
    color: theme.colors.white,
    fontFamily: theme.fonts.title700,
  },
});
