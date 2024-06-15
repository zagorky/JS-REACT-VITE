import { ProductItem } from "@/types";
import classes from "./ProductCatalog.module.scss";
import { Product } from "@/components";
import { useEffect, useState } from "react";
import { api } from "@/app/api";

const ProductCatalog = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const [error, setError] = useState("");

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (e) {
      console.error(e);
      setError(e as string);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }
  if (isError) {
    return <h1>Ошибка {error}</h1>;
  }
  return (
    <>
      <div>
        <h2>Каталог товаров</h2>
        <div className={classes.catalog}>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductCatalog;
