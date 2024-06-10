import { ActiveType } from "./types";

export const addCart = (value: number) => ({
  type: ActiveType.ADDCART,
  payload: value,
});

export const removeCart = (value: number) => ({
  type: ActiveType.REMOVECART,
  payload: value,
});
