import { api } from "@/app/api";
import { ProductItem } from "@/types";

export const getProducts = async () => {
  const { data } = await api.get<ProductItem[]>("/products");
  return data;
};
