import { createStackNavigator } from "@react-navigation/stack";
import { createContext } from "react";
import { IDriver } from "../../types";
import { TransportTypeEnum } from "../../constants";

const Stack = createStackNavigator();

interface ITransportStackViewContext {
  availableTransport?: IDriver[];
  changeTransportType?: (type: TransportTypeEnum) => void;
}

const TransportStackViewContext = createContext<ITransportStackViewContext>({});

export { Stack, TransportStackViewContext };
