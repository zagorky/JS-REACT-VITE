import { useState } from "react";
import Cart from "./components/Cart/Cart.tsx";
import { CartItem } from "./types/product.ts";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog.tsx";

function App() {
  const [cart, setCart] = useState<CartItem>({
    items: [],
  });

  return (
    <>
      <ProductCatalog setCart={setCart}></ProductCatalog>
      <Cart cart={cart} />
    </>
  );
}

export default App;
