import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import ProductsProvider from "./providers/ProductsProvider";
import router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <ProductsProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </ProductsProvider>
  </StrictMode>
);
