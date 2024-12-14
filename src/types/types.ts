import { FilterKey } from "./filterConfig.ts";

export interface ObjectDetails {
  name: string;
  city: string;
  street: string;
}

export interface FilterBarProps {
  state: string;
  onStateChange: (state: FilterKey) => void;
}

export interface FilterTileList {
  tiles: TileData[] | any;
}

export interface TileData {
  id: number | any;
  number: number | any;
  createdAt: string | any;
  controlDate: string | any;
  completedAt?: string | any;
  system: string | any;
  type: string | any;
  object: ObjectDetails;
  text: string | any;
  state: FilterKey;
}
