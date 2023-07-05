import { memo } from "react";
import { Text } from "react-native";
import { CustomTextStyles } from "./CustomText.styles";

interface ICustomText {
  children?: string;
  size?: "small" | "medium" | "large";
  align?: "left" | "right" | "center";
}

const CustomText: React.FC<ICustomText> = ({
  children,
  size = "small",
  align = "left",
}) => {
  return (
    <Text style={[CustomTextStyles[size], { textAlign: align }]}>
      {children}
    </Text>
  );
};

export default memo(CustomText);
