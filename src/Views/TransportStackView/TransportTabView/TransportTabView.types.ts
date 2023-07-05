import { StackNavigationProp } from "@react-navigation/stack";
import { IDriver } from "../../../types";
import { TransportStackNameEnum } from "../../../constants";

export type TransportStackParamList = {
  ["transport-stack"]: undefined;
  ["transport-info"]: IDriver;
};

export type TransportStackPropType = StackNavigationProp<
  TransportStackParamList,
  TransportStackNameEnum
>;
