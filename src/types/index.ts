// aren't that many common types, so no point moduling it

import { TransportTypeEnum } from "../constants";

export interface IDriver {
  id: number;
  type: TransportTypeEnum;
  driver: string;
  transport_name: string;
  phone_number: string;
  coords: {
    latitude: number;
    longitude: number;
  };
}

export interface IDriversResponse {
  cargo: IDriver[];
  public: IDriver[];
  special: IDriver[];
}
