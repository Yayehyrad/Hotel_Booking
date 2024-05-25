// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import { SignInForm } from "./components/auth/SignIn";
import HotelsForm from "./pages/HotelsForm";
import useIsLogedIn from "./hooks/isLogedIn";

function App() {
  const { isLoggedIn } = useIsLogedIn();
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
        { path: "/signin", element: <SignInForm /> },
        isLoggedIn
          ? { path: "/add-hotel", element: <HotelsForm /> }
          : { path: "/add-hotel", element: <SignInForm /> },
        // { path: "/order/new", element: <CreateOrder /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
