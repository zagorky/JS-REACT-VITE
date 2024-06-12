import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider, CounterProvider, ThemesProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <CounterProvider>
        <ThemesProvider>
          <App />
        </ThemesProvider>
      </CounterProvider>
    </CartProvider>
  </React.StrictMode>
);
