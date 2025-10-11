import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import Installation from "../Pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/AppData.json").then((res) => res.json()),
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("/AppData.json").then((res) => res.json()),
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/AppData.json");
          const data = await res.json();
          const product = data.find((item) => item.id === parseInt(params.id));

          if (!product) {
            throw new Response("App not found", { status: 404 });
          }

          return product;
        },
      },
      {
        path: "/installation/:id?",
        element: <Installation />,
        loader: async ({ params }) => {
          if (!params.id) return null;
          const res = await fetch("/AppData.json");
          const data = await res.json();
          return data.find((item) => item.id === parseInt(params.id));
        },
      },
      {
        path: "/installation",
        element: (
          <div className="text-center py-20">
            <p className="text-red-500 text-xl font-semibold">
              Please select a product first!
            </p>
            <p className="mt-4">
              Go to{" "}
              <a className="text-blue-500 underline" href="/products">
                Products
              </a>{" "}
              to choose a product.
            </p>
          </div>
        ),
      },
    ],
  },
]);

export default router;
