import { createBrowserRouter } from "react-router-dom";
import Cards from "../components/Cards";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        // index: true,
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: () => fetch("/products.json"),
        children: [
          {
            index: true,
            element: <Cards />,
            loader: () => fetch("/products.json"),
          },
          {
            path: "/category/:categoryId",
            element: <Cards />,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/productDetails/:prodId",
        element: <ProductDetails />,
        loader: ({ params }) => fetch("/products.json"),
      },
    ],
  },
]);

export default router;
