import { TransportViewStackNameEnum } from "../../../constants";
import { IDriver } from "../../../types";
import TransportListView from "./TransportListView/TransportListView";
import TransportMapView from "./TransportMapView/TransportMapView";
import {
  Tab,
  TransportVehicleTabViewContext,
} from "./TransportVehicleTabView.utils";
import { TransportVehicleNavigationPropType } from "./TransportVehicleTab.types";
import {
  TransportVehicleTabNamesEnum,
  TransportVehicleTabTitlesEnum,
} from "./TransportVehicleTab.consts";
import { useTranslation } from "react-i18next";

interface ITrabsportVehicleTabProps {
  navigation: TransportVehicleNavigationPropType;
}

const TrabsportVehicleTab: React.FC<ITrabsportVehicleTabProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const navigateToInfo = (driver: IDriver) => {
    navigation.navigate(TransportViewStackNameEnum.info, driver);
  };

  return (
    <TransportVehicleTabViewContext.Provider value={{ navigateToInfo }}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            title: t(TransportVehicleTabTitlesEnum.list),
          }}
          name={TransportVehicleTabNamesEnum.list}
          component={TransportListView}
        />
        <Tab.Screen
          options={{
            title: t(TransportVehicleTabTitlesEnum.map),
          }}
          name={TransportVehicleTabNamesEnum.map}
          component={TransportMapView}
        />
      </Tab.Navigator>
    </TransportVehicleTabViewContext.Provider>
  );
};

export default TrabsportVehicleTab;
