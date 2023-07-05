import { Text, View } from "react-native";
import { TransportTypeEnum } from "../../constants";
import { CustomCheckboxStyles } from "./CustomCheckbox.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "../../utilities/icons";

interface ICustomCheckbox {
  title: TransportTypeEnum;
  checkboxState?: string;
  handleChange?: (param: string) => void;
  value: TransportTypeEnum;
}

const CustomCheckbox: React.FC<ICustomCheckbox> = ({
  title,
  checkboxState,
  handleChange,
  value,
}) => {
  const handleClick = () => {
    if (checkboxState === value) {
      handleChange?.(TransportTypeEnum.all);
    } else {
      handleChange?.(value);
    }
  };

  return (
    <View style={CustomCheckboxStyles.container}>
      <TouchableOpacity
        style={[
          CustomCheckboxStyles.checkboxBase,
          checkboxState === value && CustomCheckboxStyles.checkboxChecked,
        ]}
        onPress={handleClick}
      >
        {checkboxState && <Ionicons name="checkmark" size={15} color="white" />}
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default CustomCheckbox;
