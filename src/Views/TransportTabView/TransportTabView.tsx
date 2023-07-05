import { useEffect, useState } from "react";
import { IDriver, IDriversResponse } from "../../types";
import { TransportTypeEnum, TransportViewStackNameEnum } from "../../constants";
import transports from "../../../assets/transport.json";
import { useTranslation } from "react-i18next";
import {
  TransportTabViewOther,
  TransportTabViewTitleNames,
} from "./TransportTabView.consts";
import TransportInfoView from "./TransportInfoView/TransportInfoView";
import TransportVehicleNavView from "./TransportVehicleNavView/TransportVehicleNavView";
import { Stack, TransportTabViewContext } from "./TransportTabView.utils";

const TransportTabView: React.FC = () => {
  const { t } = useTranslation();

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

  const changeTransportType = (type: TransportTypeEnum) => {
    setTransportType(type);
  };

  return (
    <TransportTabViewContext.Provider
      value={{ availableTransport, changeTransportType }}
    >
      <Stack.Navigator initialRouteName={TransportViewStackNameEnum.vehicle}>
        <Stack.Screen
          name={TransportViewStackNameEnum.vehicle}
          component={TransportVehicleNavView}
          options={{
            title: t(TransportTabViewTitleNames.map),
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={TransportViewStackNameEnum.info}
          component={TransportInfoView}
          options={{
            title: t(TransportTabViewTitleNames.info),
            headerBackTitle: t(TransportTabViewOther.button),
          }}
        />
      </Stack.Navigator>
    </TransportTabViewContext.Provider>
  );
};

export default TransportTabView;
