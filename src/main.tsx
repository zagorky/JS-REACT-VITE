import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterProvider } from "./context";
import ThemesProvider from "./context/Themes/ThemesProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CounterProvider>
      <ThemesProvider>
        <App />
      </ThemesProvider>
    </CounterProvider>
  </React.StrictMode>
);
