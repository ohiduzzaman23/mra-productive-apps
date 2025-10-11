import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import router from "./Routes/Routes.jsx";
import Installation from "./Pages/Installation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
