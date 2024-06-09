import { CartItem } from "@/types";
import { useImmer } from "use-immer";
import { Cart, Counter, ProductCatalog } from "@/components";
import { useContext } from "react";
import { CounetrContext } from "./context/Counter/CounterProvider";

function App() {
  const [cart, updateCart] = useImmer<CartItem>({
    items: [],
  });

  const { value } = useContext(CounetrContext);

  return (
    <>
      <Counter />
      <Cart cart={cart} />
      <ProductCatalog updateCart={updateCart} />
    </>
  );
}

export default App;
