import classes from "./ProductCatalog.module.scss";
import { Product } from "@/components";
import { product } from "../../data/data";
import { CartItem } from "@/types";
import { Updater } from "use-immer";
interface ProductCatalogProps {
  updateCart: Updater<CartItem>;
}

const ProductCatalog = (props: ProductCatalogProps) => {
  const { updateCart } = props;

  return (
    <>
      <div>
        <h2>Каталог товаров</h2>
        <div className={classes.catalog}>
          {product.map((product) => (
            <Product
              updateCart={updateCart}
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
