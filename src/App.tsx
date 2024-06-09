import { CartItem } from "@/types";
import { useImmer } from "use-immer";
import { Cart, Counter, ProductCatalog } from "@/components";

function App() {
  const [cart, updateCart] = useImmer<CartItem>({
    items: [],
  });

  return (
    <>
      <Counter />
      <Cart cart={cart} />
      <ProductCatalog updateCart={updateCart} />
    </>
  );
}

export default App;
