import { Cart, ProductCatalog } from "@/components";
import { useContext } from "react";
import "./App.css";
import { ThemesContext } from "./context/Themes/ThemesProvider";
import ThemesChanger from "./components/ThemesChanger/ThemesChanger";
import CreateItems from "./components/CreateItems/CreateItems";

function App() {
  const { theme } = useContext(ThemesContext);

  return (
    <div className={theme}>
      <ThemesChanger />
      <CreateItems />
      <Cart />
      <ProductCatalog />
    </div>
  );
}

export default App;
