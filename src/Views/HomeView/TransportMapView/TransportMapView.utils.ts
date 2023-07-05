import { createContext } from "react";
import { IDriver } from "../../../types";
import { TransportTypeEnum } from "../../../constants";

interface ITransportMapViewContext {
  driver?: IDriver;
  changeTransportType?: (value: TransportTypeEnum) => void;
  toggleModal?: () => void;
}

export const TransportMapViewContext = createContext<ITransportMapViewContext>(
  {}
);
