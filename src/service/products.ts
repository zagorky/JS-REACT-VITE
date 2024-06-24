import { api } from "@/app/api";
import {
  ProductItem,
  ProductResponse,
  ProductStoreRequest,
} from "@/types/product";

export const getProducts = async ({ queryKey }) => {
  const { data } = await api.get<ProductResponse>("/products", {
    params: {
      _page: queryKey[1],
      _per_page: queryKey[2],
    },
    transformResponse: (data) => {
      const dataJson = JSON.parse(data);
      return {
        products: dataJson.data,
        pagination: {
          first: dataJson.first,
          items: dataJson.items,
          last: dataJson.last,
          next: dataJson.next,
          pages: dataJson.pages,
          prev: dataJson.prev,
        },
      };
    },
  });
  return data;
};

export const getProdById = async (id?: string) => {
  if (!id) {
    return {};
  }
  const { data } = await api.get<ProductItem>(`/products/${id}`);
  return data;
};

export const storeProduct = async (product: ProductStoreRequest) => {
  const { data } = await api.post("/products", product);
  return data;
};
