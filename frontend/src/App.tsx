// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/register", element: <Register /> },
        // { path: "/cart", element: <Cart /> },
        // { path: "/order", element: <Order /> },
        // { path: "/order/new", element: <CreateOrder /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
