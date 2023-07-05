import { Modal, Pressable, View } from "react-native";
import MapView from "react-native-maps";
import { useCallback, useEffect, useState } from "react";
import transports from "../../../../assets/transport.json";
import { MoscowRegion } from "./TransportMapView.consts";
import { HomeViewStackNameEnum, TransportTypeEnum } from "../../../constants";
import CustomMarker from "../../../components/CustomMarker/CustomMarker";
import { IDriver, IDriversResponse } from "../../../types";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FilterModalView from "./FilterButtons/FilterButtons";
import { TransportMapViewContext } from "./TransportMapView.utils";

const TransportMapView: React.FC = ({ navigation }: any) => {
  const [availableTransport, setAvailableTransport] = useState<any[]>([]);
  const [transportType, setTransportType] = useState(TransportTypeEnum.all);

  useEffect(() => {
    const transportArr: IDriver[] = Object.entries(
      transports as IDriversResponse
    ).reduce((accum: IDriver[], [key, value]: [string, IDriver]) => {
      if (transportType === TransportTypeEnum.all) {
        return accum.concat(value);
      } else if (key === transportType) {
        return accum.concat(value);
      }
      return accum;
    }, []);
    setAvailableTransport(transportArr);
  }, [transportType]);

  const handleVehicleClick = useCallback(
    (driver: IDriver) =>
      navigation.navigate(HomeViewStackNameEnum.info, driver),
    []
  );

  const changeTransportType = (newType: TransportTypeEnum) => {
    setTransportType(newType);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <TransportMapViewContext.Provider
      value={{ changeTransportType, toggleModal }}
    >
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
    </TransportMapViewContext.Provider>
  );
};

export default TransportMapView;
