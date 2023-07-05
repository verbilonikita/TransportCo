import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TransportTabViewContext } from "../../TransportTabView.utils";
import DriversInfo from "../../../../components/DriversInfo/DriversInfo";
import Divider from "../../../../components/Divider/Divider";
import { TransportVehicleNavViewContext } from "../TransportVehicleNavView.utils";

const TransportListView: React.FC<any> = ({ navigation }) => {
  const { availableTransport } = useContext(TransportTabViewContext);
  const { navigateToInfo } = useContext(TransportVehicleNavViewContext);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {availableTransport?.map((driver, i) => (
          <TouchableOpacity onPress={() => navigateToInfo?.(driver)}>
            <DriversInfo driver={driver} />
            {i != availableTransport.length - 1 && <Divider />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TransportListView;
