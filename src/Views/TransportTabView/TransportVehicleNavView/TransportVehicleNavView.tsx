import { TransportViewStackNameEnum } from "../../../constants";
import { IDriver } from "../../../types";
import TransportListView from "./TransportListView/TransportListView";
import TransportMapView from "./TransportMapView/TransportMapView";
import {
  Tab,
  TransportVehicleNavViewContext,
} from "./TransportVehicleNavView.utils";
import { TransportVehicleNavigationPropType } from "./TransportVehicleNav.types";
import {
  TransportVehicleNavNamesEnum,
  TransportVehicleNavTitlesEnum,
} from "./TransportVehicleNav.consts";
import { useTranslation } from "react-i18next";

interface ITransportVehicleNavViewProps {
  navigation: TransportVehicleNavigationPropType;
}

const TransportVehicleNavView: React.FC<ITransportVehicleNavViewProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const navigateToInfo = (driver: IDriver) => {
    navigation.navigate(TransportViewStackNameEnum.info, driver);
  };

  return (
    <TransportVehicleNavViewContext.Provider value={{ navigateToInfo }}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            title: t(TransportVehicleNavTitlesEnum.list),
          }}
          name={TransportVehicleNavNamesEnum.list}
          component={TransportListView}
        />
        <Tab.Screen
          options={{
            title: t(TransportVehicleNavTitlesEnum.map),
          }}
          name={TransportVehicleNavNamesEnum.map}
          component={TransportMapView}
        />
      </Tab.Navigator>
    </TransportVehicleNavViewContext.Provider>
  );
};

export default TransportVehicleNavView;
