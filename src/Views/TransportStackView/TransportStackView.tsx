import { useEffect, useState } from "react";
import { IDriver, IDriversResponse } from "../../types";
import { TransportStackNameEnum, TransportTypeEnum } from "../../constants";
import transports from "../../../assets/transport.json";
import { useTranslation } from "react-i18next";
import {
  TransportStackViewOther,
  TransportStackViewTitleNames,
} from "./TransportStackView.consts";
import TransportInfoView from "./TransportInfoView/TransportInfoView";
import TransportVehicleTabView from "./TransportTabView/TransportTabView";
import { Stack, TransportStackViewContext } from "./TransportStackView.utils";

const TransportStackView: React.FC = () => {
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
    <TransportStackViewContext.Provider
      value={{ availableTransport, changeTransportType }}
    >
      {/* Stack - Vehicle Info and TransportVehicleTabView */}
      <Stack.Navigator initialRouteName={TransportStackNameEnum.transport}>
        <Stack.Screen
          name={TransportStackNameEnum.transport}
          component={TransportVehicleTabView}
          options={{
            title: t(TransportStackViewTitleNames.map),
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={TransportStackNameEnum.info}
          component={TransportInfoView}
          options={{
            title: t(TransportStackViewTitleNames.info),
            headerBackTitle: t(TransportStackViewOther.button),
          }}
        />
      </Stack.Navigator>
    </TransportStackViewContext.Provider>
  );
};

export default TransportStackView;
