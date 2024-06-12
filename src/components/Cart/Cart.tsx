import { CartItem } from "@/types";
import { FC } from "react";
import classes from "./Cart.module.scss";
interface CartItemProps {
  cart: CartItem;
}

const Cart: FC<CartItemProps> = (props) => {
  const {
    cart: { items },
  } = props;

  return (
    <div className={classes.cart}>
      <h2>Корзина</h2>
      {items.length === 0 ? (
        <p className={classes.p}>Ваша корзина пуста</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.count} шт.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
