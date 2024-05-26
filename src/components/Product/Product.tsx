import MyButton from "../MyButton/MyButton";
import classes from "./Product.module.scss";
import { ProductItem } from "../../types/product.ts";
import { useState } from "react";
import CountItems from "../CountItems/CountItems.tsx";
interface ProductProps {
  product: ProductItem;
}

const Product = (props: ProductProps) => {
  const [count, setCount] = useState(0);

  const addCart = () => {
    setCount(count + 1);
  };
  const removeCart = () => {
    setCount(count - 1);
  };

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
        <MyButton onClick={addCart}>Добавить</MyButton>
      </div>
      {count > 0 && (
        <CountItems
          count={count}
          onDecrement={removeCart}
          onIncrement={addCart}
        />
      )}
    </div>
  );
};

export default Product;
