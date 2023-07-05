import { StackNavigationProp } from "@react-navigation/stack";
import { TransportViewStackNameEnum } from "../../../constants";
import { IDriver } from "../../../types";

export type TransportViewStackParamList = {
  TransportMap: undefined;
  TransportInfo: IDriver;
};

export type TransportVehicleNavigationPropType = StackNavigationProp<
  TransportViewStackParamList,
  TransportViewStackNameEnum
>;
