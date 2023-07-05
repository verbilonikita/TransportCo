import { TransportTypeEnum } from "../../constants";
import { IVehicleMarkerSettings } from "./CustomMarker.consts";

export const getVehicleType = (type: string): IVehicleMarkerSettings => {
  switch (type) {
    case TransportTypeEnum.cargo:
      return {
        type: "truck-cargo-container",
        color: "green",
      };
    case TransportTypeEnum.public:
      return {
        type: "bus",
        color: "blue",
      };
    case TransportTypeEnum.special:
      return {
        type: "police-badge",
        color: "red",
      };
    default:
      return {
        type: "truck-cargo-container",
        color: "red",
      };
  }
};
