import { ImmerReducer } from "use-immer";
import { ActionTypes, CartActions, CartTypes } from "./types";

export const cartReducer: ImmerReducer<CartTypes, CartActions> = (
  draftState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.CHANGECOUNT: {
      if (payload.count < 0) {
        break;
      }
      if (payload.count === 0) {
        draftState.items = draftState.items.filter(
          (item) => item.id !== payload.product.id
        );
      }
      const findItem = draftState.items.find(
        (item) => item.id === payload.product.id
      );
      if (findItem) {
        findItem.count = payload.count;
      } else {
        draftState.items.push({ ...payload.product, count: payload.count });
      }
      break;
    }
    case ActionTypes.REMOVEITEM:
      draftState.items = draftState.items.filter(
        (item) => item.id !== payload.productId
      );
      break;
    case ActionTypes.DELETEITEMS:
      draftState.items = [];
      break;
    default:
      break;
  }
};
