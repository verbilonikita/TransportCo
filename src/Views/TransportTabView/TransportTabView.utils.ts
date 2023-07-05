import { createStackNavigator } from "@react-navigation/stack";
import { createContext, useContext } from "react";
import { IDriver } from "../../types";
import { TransportTypeEnum } from "../../constants";

const Stack = createStackNavigator();

interface ITransportTabViewContext {
  availableTransport?: IDriver[];
  changeTransportType?: (type: TransportTypeEnum) => void;
}

const TransportTabViewContext = createContext<ITransportTabViewContext>({});

export { Stack, TransportTabViewContext };
