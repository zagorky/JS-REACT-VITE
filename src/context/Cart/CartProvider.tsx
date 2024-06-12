import { Dispatch, FC, ReactNode, createContext } from "react";
import { useImmerReducer } from "use-immer";
import { cartReducer } from "./cartReducer";
import { initialState } from "./initialState";
import { CartActions, CartTypes } from "./types";

interface CartContextProps {
  children: ReactNode;
}

export const CartContext = createContext<{
  cart: CartTypes;
  dispatch: Dispatch<CartActions>;
}>({
  cart: {
    ...initialState,
  },
  dispatch: () => {},
});

const CartProvider: FC<CartContextProps> = ({ children }) => {
  const [cart, dispatch] = useImmerReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
