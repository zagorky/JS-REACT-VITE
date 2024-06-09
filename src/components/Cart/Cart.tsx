import { CartItem } from "@/types";
import { FC } from "react";

interface CartItemProps {
  cart: CartItem;
}

const Cart: FC<CartItemProps> = (props) => {
  const {
    cart: { items },
  } = props;

  return (
    <div>
      <h2>Корзина</h2>
      {items.length === 0 ? (
        <p>Ваша корзина пуста</p>
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
