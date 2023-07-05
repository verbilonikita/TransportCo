import { StyleSheet } from "react-native";

export const CustomCheckboxStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  checkboxBase: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "blue",
  },
});
