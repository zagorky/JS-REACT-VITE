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

export interface ProductResponse {
  products: ProductItem[];
  pagination: PaginationType;
}

export interface PaginationType {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
}

export type discountType = "percent" | "fix";

export type ProductStoreRequest = Omit<ProductItem, "id" | "count">;

export interface AddedItems extends ProductItem {
  count: number;
}
export interface CartItem {
  items: AddedItems[];
}
