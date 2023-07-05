import { createContext } from "react";
import { IDriver } from "../../../types";

export const TransportInfoViewContext = createContext<{
  driver: IDriver | null;
}>({ driver: null });

export const getInitialRegion = (driver: IDriver) => {
  return {
    latitude: driver.coords.latitude,
    longitude: driver.coords.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };
};
