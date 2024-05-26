import classes from "./ProductCatalog.module.scss";
import Product from "../Product/Product";
import { product } from "../../data/data";
import { Dispatch, SetStateAction } from "react";
import { CartItem } from "../../types/product";
interface ProductCatalogProps {
  setCart: Dispatch<SetStateAction<CartItem>>;
}

const ProductCatalog = (props: ProductCatalogProps) => {
  const { setCart } = props;

  return (
    <>
      <div>
        <h2>Каталог товаров</h2>
        <div className={classes.catalog}>
          {product.map((product) => (
            <Product
              setCart={setCart}
              product={product}
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductCatalog;
