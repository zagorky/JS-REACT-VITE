import { api } from "@/app/api";
import { ProductResponse, ProductStoreRequest } from "@/types/product";

export const getProducts = async () => {
  const { data } = await api.get<ProductResponse>("/products", {
    params: {
      _page: 1,
      _per_page: 3,
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

export const storeProduct = async (product: ProductStoreRequest) => {
  const { data } = await api.post("/products", product);
  return data;
};
