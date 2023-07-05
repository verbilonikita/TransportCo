import { StackNavigationProp } from "@react-navigation/stack";
import { TransportViewStackNameEnum } from "../../../constants";
import { IDriver } from "../../../types";

export type TransportViewStackParamList = {
  TransportMap: undefined; // No parameters for TransportMap route
  TransportInfo: IDriver; // Requires a driver parameter for TransportInfo route
};

export type TransportVehicleNavigationPropType = StackNavigationProp<
  TransportViewStackParamList,
  TransportViewStackNameEnum
>;
