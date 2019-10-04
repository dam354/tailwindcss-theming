import { Color } from "./Color";

export interface Theme<T = Color[]> {
  colors: T;
}

export interface Themes<T = Theme> {
  default: T;
  [name: string]: T;
}
