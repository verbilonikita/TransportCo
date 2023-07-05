import { memo } from "react";
import { Marker } from "react-native-maps";
// types
import { IDriver } from "../../types";
// utils
import { getVehicleType } from "./CustomMarker.utils";
// icons
import { MAIcons } from "../../utilities/icons";

interface ICustomMarkerProps {
  handleVehicleClick?: (driver: IDriver) => void;
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
