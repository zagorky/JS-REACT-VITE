import classes from "./Cart.module.scss";
import { CartItem } from "../../types/product";
import { FC } from "react";

interface CartItemProps {
  cart: CartItem;
}

const Cart: FC<CartItemProps> = (props) => {
  const {
    cart: { items },
  } = props;

  return (
    <ul className={classes.cartContainer}>
      {items.map((item) => (
        <li>
          {item.name} - {item.count}
        </li>
      ))}
    </ul>
  );
};

export default Cart;
