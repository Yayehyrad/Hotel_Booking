// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        // { path: "/menu", element: <Menu /> },
        // { path: "/cart", element: <Cart /> },
        // { path: "/order", element: <Order /> },
        // { path: "/order/new", element: <CreateOrder /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
