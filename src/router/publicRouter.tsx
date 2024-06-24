import { PublicLayout } from "@/layout";
import { CatalogPage, ErrorPage, HomePage, ProductPage } from "@/pages";
import CreateItemPage from "@/pages/CreateItemPage/CreateItemPage";
import { createBrowserRouter } from "react-router-dom";
import { RouteVar } from "./constants";

export const router = createBrowserRouter([
  {
    path: RouteVar.home,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RouteVar.catalog,
        element: <CatalogPage />,
      },
      {
        path: RouteVar.addItem,
        element: <CreateItemPage />,
      },
      {
        path: RouteVar.itemDetails,
        element: <ProductPage />,
      },
    ],
  },
]);
