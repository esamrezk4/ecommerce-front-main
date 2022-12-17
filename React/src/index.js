import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ErrorPage from "./pages/ErrorPage";
import Items from "./pages/Items";
import ShoppingCard from "./pages/ShoppingCard";
import NewCollection from "./pages/NewCollection";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/:id/items",
        element: <Items />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "Item not found",
              status: 400,
            });
          }
        },
      },
      {
        path: "shoppingCard ",
        element: <ShoppingCard />,
      },
      {
        path: "new-collection",
        element: <NewCollection />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
