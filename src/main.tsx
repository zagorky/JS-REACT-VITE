import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider, CounterProvider, ThemesProvider } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Router, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <CounterProvider>
          <ThemesProvider>
            <App />
            {/* <RouterProvider router={Router} /> */}
          </ThemesProvider>
        </CounterProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
