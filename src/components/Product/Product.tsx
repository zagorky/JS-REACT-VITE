import MyButton from "../MyButton/MyButton";
import classes from "./Product.module.scss";
import { ProductItem } from "../../types/product.ts";
interface ProductProps {
  product: ProductItem;
}

const Product = (props: ProductProps) => {
  const { product } = props;
  function fav() {
    if (product.isFavorite === true)
      return (
        <img
          className={classes.fav}
          src="https://img.icons8.com/parakeet-line/48/thumb-up.png"
          alt="thumb-up"
        />
      );
    else
      return (
        <img
          className={classes.fav}
          src="https://img.icons8.com/parakeet-line/48/thumbs-down.png"
          alt="thumbs-down"
        />
      );
  }

  return (
    <div>
      <div key={product.id} className={classes.products}>
        <p>{product.name}</p>
        <img
          className={classes.itemImg}
          src={product.img}
          alt="Изображение товара"
        />
        <p>Стоимость: {product.price}</p>
        <p>Скидка: {product.discount}</p>
        <p>Рейтинг: {product.rating}</p>
        <p>Артикул: {product.id}</p>
        <p>Избранное:{fav()}</p>
      </div>
      <MyButton />
    </div>
  );
};

export default Product;
