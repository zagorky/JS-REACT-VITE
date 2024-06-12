import { ProductItem } from "@/types";
import { ActionTypes, CartActions } from "./types";

export const changeCount = (
  product: ProductItem,
  count: number
): CartActions => ({
  type: ActionTypes.CHANGECOUNT,
  payload: { product, count },
});

export const deleteItems = (): CartActions => ({
  type: ActionTypes.DELETEITEMS,
  payload: undefined,
});

export const removeItem = (productId: number): CartActions => ({
  type: ActionTypes.REMOVEITEM,
  payload: { productId },
});
