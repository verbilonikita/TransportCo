import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createContext } from "react";
import { IDriver } from "../../../types";

const Tab = createMaterialTopTabNavigator();

interface ITransportVehicleNavView {
  navigateToInfo?: (driver: IDriver) => void;
}

const TransportVehicleTabViewContext = createContext<ITransportVehicleNavView>(
  {}
);

export { Tab, TransportVehicleTabViewContext };
