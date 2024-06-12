import { ReactNode } from "react";
import { ActiveType } from "./types";

export const addCart = (value: number) => ({
  type: ActiveType.ADDCART,
  payload: value,
});

export const removeCart = (value: number) => ({
  type: ActiveType.REMOVECART,
  payload: value,
});

export const deleteItems = (value: ReactNode) => ({
  type: ActiveType.DELETEITEMS,
  payload: value,
});

export const removeItem = (value: ReactNode) => ({
  type: ActiveType.REMOVEITEM,
  payload: value,
});
