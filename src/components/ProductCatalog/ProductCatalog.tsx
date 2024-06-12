import classes from "./ProductCatalog.module.scss";
import { Product } from "@/components";
import { product } from "../../data/data";

const ProductCatalog = () => {
  return (
    <>
      <div>
        <h2>Каталог товаров</h2>
        <div className={classes.catalog}>
          {product.map((product) => (
            <Product product={product} key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductCatalog;
