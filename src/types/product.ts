export interface ProductItem {
  id: string;
  name: string;
  img?: string;
  price: number;
  discount?: {
    type: discountType;
    value: number;
  };
  rating?: number;
  isFavorite?: boolean;
  count?: number;
}

export type discountType = "percent" | "fix";

export type ProductStoreRequest = Omit<ProductItem, "id" | "count">;

export interface AddedItems extends ProductItem {
  count: number;
}
export interface CartItem {
  items: AddedItems[];
}
