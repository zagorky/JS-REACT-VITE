import { CartItem } from "@/types";
import { useImmer } from "use-immer";
import { Cart, Counter, ProductCatalog } from "@/components";
import { useContext } from "react";
import { CounterContext } from "./context/Counter/CounterProvider";

function App() {
  const [cart, updateCart] = useImmer<CartItem>({
    items: [],
  });

  const { value } = useContext(CounterContext);

  return (
    <>
      {value}
      <Counter />
      <Cart cart={cart} />
      <ProductCatalog updateCart={updateCart} />
    </>
  );
}

export default App;
