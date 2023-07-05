import { View } from "react-native";
import CustomText from "../../../../components/CustomText/CustomText";
import { DriversInfoStyles } from "./DriversInfo.styles";
import { useTranslation } from "react-i18next";
import { IDriver } from "../../../../types";

const DriversInfo: React.FC<{ driver: IDriver }> = ({ driver }) => {
  const { t } = useTranslation();
  return (
    <View style={{ padding: 10, gap: 20 }}>
      <View style={DriversInfoStyles.row}>
        <CustomText size="medium">{`${t(
          "tabs.transport.driver_info.name"
        )}`}</CustomText>
        <CustomText size="small">{driver?.["driver"]}</CustomText>
      </View>
      <View style={DriversInfoStyles.row}>
        <CustomText size="medium">{`${t(
          "tabs.transport.driver_info.category"
        )}`}</CustomText>
        <CustomText>{driver?.["type"]}</CustomText>
      </View>
      <View style={DriversInfoStyles.row}>
        <CustomText size="medium">{`${t(
          "tabs.transport.driver_info.phone"
        )}`}</CustomText>
        <CustomText>{`+${driver?.["phone_number"]}`}</CustomText>
      </View>
    </View>
  );
};

export default DriversInfo;
