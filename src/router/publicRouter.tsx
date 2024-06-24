import { PublicLayout } from "@/layout";
import { CatalogPage, ErrorPage, HomePage } from "@/pages";
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
    ],
  },
]);
