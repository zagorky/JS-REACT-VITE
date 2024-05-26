import classes from "./ProductCatalog.module.scss";
import Product from "../Product/Product";
import { product } from "../../Data/data";

export default function ProductCatalog() {

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
}
