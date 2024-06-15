import { Cart, ProductCatalog } from "@/components";
import { useContext } from "react";
import "./App.css";
import { ThemesContext } from "./context/Themes/ThemesProvider";
import ThemesChanger from "./components/ThemesChanger/ThemesChanger";

function App() {
  const { theme } = useContext(ThemesContext);

  return (
    <div className={theme}>
      <ThemesChanger />
      <Cart />
      {/* <ProductList /> */}
      <ProductCatalog />
    </div>
  );
}

export default App;
