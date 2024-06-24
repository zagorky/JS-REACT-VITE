import { PublicLayout } from "@/layout";
import { CatalogPage, ErrorPage, HomePage, ProductPage } from "@/pages";
import CreateItemPage from "@/pages/CreateItemPage/CreateItemPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <CatalogPage />,
      },
      {
        path: "/add-item",
        element: <CreateItemPage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
    ],
  },
]);
