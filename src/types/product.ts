export interface ProductItem {
  id: number;
  name: string;
  img?: string;
  price: string;
  discount?: string;
  rating?: number;
  isFavorite?: boolean;
}

interface AddedItems extends ProductItem {
  count: number;
}
export interface CartItem {
  items: AddedItems[];
}
