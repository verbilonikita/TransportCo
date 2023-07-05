import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TransportStackViewContext } from "../../TransportStackView.utils";
import DriversInfo from "../../../../components/DriversInfo/DriversInfo";
import Divider from "../../../../components/Divider/Divider";
// context
import { TransportVehicleTabViewContext } from "../TransportTabView.utils";

const TransportListView: React.FC = () => {
  const { availableTransport } = useContext(TransportStackViewContext);
  const { navigateToInfo } = useContext(TransportVehicleTabViewContext);

  // Each user is clickable
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {availableTransport?.map((driver, i) => (
          <TouchableOpacity
            onPress={() => navigateToInfo?.(driver)}
            key={driver.id}
          >
            <DriversInfo driver={driver} />
            {i != availableTransport.length - 1 && <Divider />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TransportListView;
