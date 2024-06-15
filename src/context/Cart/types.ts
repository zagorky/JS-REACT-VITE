import { ProductItem } from "@/types";

export interface CartTypes {
  items: ProductItem[];
}

export type CartActions =
  | {
      type: ActionTypes.CHANGECOUNT;
      payload: {
        product: ProductItem;
        count: number;
      };
    }
  | { type: ActionTypes.DELETEITEMS; payload: undefined }
  | {
      type: ActionTypes.REMOVEITEM;
      payload: {
        productId: number;
      };
    };

export enum ActionTypes {
  CHANGECOUNT = "changeCount",
  DELETEITEMS = "deleteItems",
  REMOVEITEM = "removeItem",
}
