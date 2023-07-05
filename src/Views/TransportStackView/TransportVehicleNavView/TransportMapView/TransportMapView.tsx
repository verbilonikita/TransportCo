import { View } from "react-native";
import MapView from "react-native-maps";
import { useCallback, useContext } from "react";
import { MoscowRegion } from "./TransportMapView.consts";
import CustomMarker from "../../../../components/CustomMarker/CustomMarker";
import { IDriver } from "../../../../types";
import FilterModalView from "./FilterButtons/FilterButtons";
import { TransportVehicleTabViewContext } from "../TransportVehicleTabView.utils";
import { TransportStackViewContext } from "../../TransportStackView.utils";

const TransportMapView: React.FC = () => {
  const { availableTransport } = useContext(TransportStackViewContext);

  const { navigateToInfo } = useContext(TransportVehicleTabViewContext);

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
