import { ProductItem } from "@/types";
import classes from "./ProductCatalog.module.scss";
import { Product } from "@/components";
import { useEffect, useState } from "react";

const ProductCatalog = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

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
