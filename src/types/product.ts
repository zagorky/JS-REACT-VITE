export interface ProductItem {
  id: number;
  name: string;
  img?: string;
  price: number;
  discount?: string;
  rating?: number;
  isFavorite?: boolean;
  count?: number;
}

export interface AddedItems extends ProductItem {
  count: number;
}
export interface CartItem {
  items: AddedItems[];
}
