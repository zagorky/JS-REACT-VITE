import { api } from "@/app/api";
import { ProductItem } from "@/types";
import { ProductStoreRequest } from "@/types/product";

export const getProducts = async () => {
  const { data } = await api.get<ProductItem[]>("/products");
  return data;
};

export const storeProduct = async (product: ProductStoreRequest) => {
  const { data } = await api.post("/products", product);
  return data;
};
