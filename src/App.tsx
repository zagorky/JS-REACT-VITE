import { Cart, ProductCatalog } from "@/components";
import { useContext } from "react";
import ThemesChanger from "./components/ThemesChanger/ThemesChanger";
import "./App.css";
import { ThemesContext } from "./context/Themes/ThemesProvider";

function App() {
  const { theme } = useContext(ThemesContext);

  return (
    <div className={theme}>
      <ThemesChanger />
      <Cart />
      <ProductCatalog />
    </div>
  );
}

export default App;
