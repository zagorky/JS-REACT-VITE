import { MyButton, CountItems } from "@/components";
import classes from "./Product.module.scss";
import { ProductItem, CartItem } from "@/types";
import { useState } from "react";
import { Updater } from "use-immer";

interface ProductProps {
  product: ProductItem;
  updateCart: Updater<CartItem>;
}

const Product = (props: ProductProps) => {
  const [count, setCount] = useState(0);

  const { product, updateCart } = props;

  const addCart = () => {
    const nextState = count + 1;
    setCount(nextState);

    updateCart((draft) => {
      const checkProduct = draft.items.find((item) => item.id === product.id);
      if (checkProduct) {
        checkProduct.count += 1;
      } else {
        draft.items.push({ ...product, count: 1 });
      }
    });
  };
  const removeCart = () => {
    updateCart((draft) => {
      const checkProduct = draft.items.find((item) => item.id === product.id);
      if (checkProduct) {
        checkProduct.count -= 1;
      } else {
        throw new Error("нельзя изменить то, чего нет в корзине");
      }
      if (checkProduct.count === 0) {
        draft.items = draft.items.filter((item) => item.id !== product.id);
      }
    });
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
        <CountItems count={count} removeCart={removeCart} addCart={addCart} />
      )}
    </div>
  );
};

export default Product;
