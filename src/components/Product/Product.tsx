import { MyButton, CountItems } from "@/components";
import classes from "./Product.module.scss";
import { ProductItem } from "@/types";
import { CartContext } from "@/context";
import { useContext } from "react";
import { changeCount } from "@/context/Cart/actions";

interface ProductProps {
  product: ProductItem;
}

const Product = (props: ProductProps) => {
  const { product } = props;

  const { cart, dispatch } = useContext(CartContext);

  const count = cart.items.find((prod) => prod.id === product.id)?.count || 0;

  const addCart = () => {
    dispatch(changeCount(product, count + 1));
  };

  const removeCart = () => {
    dispatch(changeCount(product, count - 1));
  };
  const changeCartCount: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(changeCartCount(product, +event.target.value));
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
          removeCart={removeCart}
          addCart={addCart}
          handleChangeCartCount={changeCartCount}
        />
      )}
    </div>
  );
};

export default Product;
