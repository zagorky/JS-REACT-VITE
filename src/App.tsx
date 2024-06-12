import { CartItem } from "@/types";
import { useImmer } from "use-immer";
import { Cart, ProductCatalog } from "@/components";
import { useContext } from "react";
// import { CounterContext } from "./context/Counter/CounterProvider";
import ThemesChanger from "./components/ThemesChanger/ThemesChanger";
import "./App.css";
import { ThemesContext } from "./context/Themes/ThemesProvider";

function App() {
  const [cart, updateCart] = useImmer<CartItem>({
    items: [],
  });

  const { theme } = useContext(ThemesContext);

  return (
    <div className={theme}>
      <ThemesChanger />
      <Cart cart={cart} />
      <ProductCatalog updateCart={updateCart} />
    </div>
  );
}

export default App;
