import { FC, useContext } from "react";
import classes from "./Cart.module.scss";
import { CartContext } from "@/context/Cart/CartProvider";
import CountItems from "../CountItems/CountItems";
import { ProductItem } from "@/types";
import { changeCount } from "@/context/Cart/actions";

const Cart: FC = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addCart = (product: ProductItem, count: number) => {
    dispatch(changeCount(product, count + 1));
  };

  const removeCart = (product: ProductItem, count: number) => {
    dispatch(changeCount(product, count - 1));
  };

  const changeCartCount = (product: ProductItem, count: number) => {
    dispatch(changeCount(product, count));
  };

  return (
    <div className={classes.cart}>
      <h2>Корзина</h2>
      {cart.items.length === 0 ? (
        <div className={classes.cartContainer}>
          <p className={classes.p}>Ваша корзина пуста</p>
        </div>
      ) : (
        <div className={classes.cartContainer}>
          <ul>
            {cart.items.map(
              (item) =>
                item.count && (
                  <li key={item.id}>
                    {item.name} - {item.price} руб.
                    <CountItems
                      count={item.count || 0}
                      removeCart={() => removeCart(item, item.count || 0)}
                      addCart={() => addCart(item, item.count || 0)}
                      handleChangeCartCount={(event) =>
                        changeCartCount(item, +event.target.value)
                      }
                    />
                    <p>Итого -{item.price * (item.count || 0)}</p>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
