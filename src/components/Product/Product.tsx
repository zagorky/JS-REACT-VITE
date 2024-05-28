import MyButton from "../MyButton/MyButton";
import classes from "./Product.module.scss";
import { ProductItem, CartItem } from "../../types/product.ts";
import { Dispatch, SetStateAction, useState } from "react";
import CountItems from "../CountItems/CountItems.tsx";

interface ProductProps {
  product: ProductItem;
  setCart: Dispatch<SetStateAction<CartItem>>;
}

const Product = (props: ProductProps) => {
  const [count, setCount] = useState(0);

  const { product, setCart } = props;

  const addCart = () => {
    const nextState = count + 1;
    setCount(nextState);

    setCart((prevState) => {
      return {
        ...prevState,
        items: [...prevState.items, { ...product, count: nextState }],
      };
    });
  };
  const removeCart = () => {
    setCount((prevState) => prevState - 1);
  };

  function fav() {
    return product.isFavorite ? "В избранном" : "Добавить в избранное";
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
          <button>{fav()}</button>
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
