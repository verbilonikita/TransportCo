import { Pressable, TouchableOpacity } from "react-native";
import { TransportTypeEnum } from "../../constants";
import { IVehicleMarkerSettings } from "./CustomMarker.consts";
import { memo } from "react";

import { Marker } from "react-native-maps";
import MAIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { IDriver } from "../../types";
// utils
import { getVehicleType } from "./CustomMarker.utils";

interface ICustomMarkerProps {
  handleVehicleClick?: (el: any) => void;
  driver: IDriver;
}
const CustomMarker: React.FC<ICustomMarkerProps> = ({
  handleVehicleClick,
  driver,
}) => {
  const vehicle = getVehicleType(driver?.type);

  const onPress = () => handleVehicleClick?.(driver);
  return (
    <Marker key={driver?.driver} coordinate={driver.coords} onPress={onPress}>
      <MAIcons name={vehicle.type} size={35} color={vehicle?.color} />
    </Marker>
  );
};

export default memo(CustomMarker);
