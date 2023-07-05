import { IDriver } from "../../../types";
import TransportListView from "./TransportListView/TransportListView";
import TransportMapView from "./TransportMapView/TransportMapView";
import { Tab, TransportVehicleTabViewContext } from "./TransportTabView.utils";
import { TransportStackPropType } from "./TransportTabView.types";
import {
  TransportTabNamesEnum,
  TransportTabTitlesEnum,
} from "./TransportTabView.consts";
import { useTranslation } from "react-i18next";
import { TransportStackNameEnum } from "../../../constants";
import { useCallback, useMemo } from "react";

interface ITrabsportVehicleTabProps {
  navigation: TransportStackPropType;
}

const TrabsportVehicleTab: React.FC<ITrabsportVehicleTabProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const navigateToInfo = useCallback((driver: IDriver) => {
    navigation.navigate(TransportStackNameEnum.info, driver);
  }, []);

  const context = useMemo(() => {
    return {
      navigateToInfo,
    };
  }, []);

  return (
    <TransportVehicleTabViewContext.Provider value={context}>
      {/* Displays List of Users  */}
      <Tab.Navigator>
        <Tab.Screen
          options={{
            title: t(TransportTabTitlesEnum.list),
          }}
          name={TransportTabNamesEnum.list}
          component={TransportListView}
        />
        {/* Displays map with available transport */}
        <Tab.Screen
          options={{
            title: t(TransportTabTitlesEnum.map),
          }}
          name={TransportTabNamesEnum.map}
          component={TransportMapView}
        />
      </Tab.Navigator>
    </TransportVehicleTabViewContext.Provider>
  );
};

export default TrabsportVehicleTab;
