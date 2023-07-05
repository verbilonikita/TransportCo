import { Button, Text, View } from "react-native";
import MapView from "react-native-maps";
import CustomMarker from "../../../components/CustomMarker/CustomMarker";
import ButtonsHub from "./ButtonsHub/ButtonsHub";
import {
  TransportInfoViewContext,
  getInitialRegion,
} from "./TransportInfoView.utils";
import DriversInfo from "./DriversInfo/DriversInfo";
import { useMemo } from "react";
import { TransportInfoViewStyles } from "./TransportInfo.styles";

const TransportInfoView: React.FC<any> = ({ route: { params: driver } }) => {
  const initialRegion = useMemo(() => getInitialRegion(driver), [driver]);
  return (
    <TransportInfoViewContext.Provider value={{ driver }}>
      <View style={TransportInfoViewStyles.container}>
        <MapView
          style={TransportInfoViewStyles.map}
          initialRegion={initialRegion}
        >
          <CustomMarker driver={driver} />
        </MapView>
        <DriversInfo />
        <ButtonsHub />
      </View>
    </TransportInfoViewContext.Provider>
  );
};

export default TransportInfoView;
