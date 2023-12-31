import { View } from "react-native";
import { DriversInfoStyles } from "./DriversInfo.styles";
import { useTranslation } from "react-i18next";
import { IDriver } from "../../types";
import CustomText from "../CustomText/CustomText";
import { memo } from "react";
import { DriversInfoEnum } from "./DriversInfo.consts";

const DriversInfo: React.FC<{ driver: IDriver }> = ({ driver }) => {
  const { t } = useTranslation();
  return (
    <View style={{ padding: 10, gap: 20 }}>
      <View style={DriversInfoStyles.row}>
        <CustomText size="medium">{`${t(DriversInfoEnum.id)}`}</CustomText>
        <CustomText size="small">{`${driver?.id}`}</CustomText>
      </View>
      <View style={DriversInfoStyles.row}>
        <CustomText size="medium">{`${t(DriversInfoEnum.name)}`}</CustomText>
        <CustomText size="small">{driver?.["driver"]}</CustomText>
      </View>
      <View style={DriversInfoStyles.row}>
        <CustomText size="medium">{`${t(
          DriversInfoEnum.category
        )}`}</CustomText>
        <CustomText>{driver?.["type"]}</CustomText>
      </View>
      <View style={DriversInfoStyles.row}>
        <CustomText size="medium">{`${t(DriversInfoEnum.phone)}`}</CustomText>
        <CustomText>{`+${driver?.["phone_number"]}`}</CustomText>
      </View>
    </View>
  );
};

export default memo(DriversInfo);
