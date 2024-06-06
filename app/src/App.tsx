import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
