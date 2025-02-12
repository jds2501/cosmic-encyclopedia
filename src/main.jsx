import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App"
import HomePage from "./HomePage";
import ContentPage from "./ContentPage";

const root = document.getElementById("root");

function validateId() {
  return true;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ":id",
        element: <ContentPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
