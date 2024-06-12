import { Dispatch } from "react";

export interface CounterType {
  counter: number;
}

export type CounterAction =
  | { type: ActiveType.ADDCART; payload: number }
  | { type: ActiveType.REMOVECART; payload: number };

export enum ActiveType {
  ADDCART = "addcart",
  REMOVECART = "removecart",
  DELETEITEMS = "deleteItems",
  REMOVEITEM = "removeItem",
}

export interface CounterContextType {
  state: CounterType;
  dispatch: Dispatch<CounterAction>;
}
