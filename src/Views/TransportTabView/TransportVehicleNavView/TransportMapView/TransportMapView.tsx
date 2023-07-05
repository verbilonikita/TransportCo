import { View } from "react-native";
import MapView from "react-native-maps";
import { useCallback, useContext } from "react";
import { MoscowRegion } from "./TransportMapView.consts";
import CustomMarker from "../../../../components/CustomMarker/CustomMarker";
import { IDriver } from "../../../../types";
import FilterModalView from "./FilterButtons/FilterButtons";
import { TransportVehicleNavViewContext } from "../TransportVehicleNavView.utils";
import { TransportTabViewContext } from "../../TransportTabView.utils";

const TransportMapView: React.FC = () => {
  const { availableTransport } = useContext(TransportTabViewContext);

  const { navigateToInfo } = useContext(TransportVehicleNavViewContext);

  const handleVehicleClick = useCallback(
    (driver: IDriver) => navigateToInfo?.(driver),
    []
  );

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <FilterModalView />
      <MapView style={{ flex: 1 }} initialRegion={MoscowRegion}>
        {availableTransport?.map((driver: IDriver) => (
          <CustomMarker
            key={driver.id}
            handleVehicleClick={handleVehicleClick}
            driver={driver}
          />
        ))}
      </MapView>
    </View>
  );
};

export default TransportMapView;
