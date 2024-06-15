import { ProductItem } from "@/types";
import classes from "./ProductCatalog.module.scss";
import { Product } from "@/components";
import { useEffect, useState } from "react";

const ProductCatalog = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.error(e));
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
