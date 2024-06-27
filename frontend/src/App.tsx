// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import { SignInForm } from "./components/auth/SignIn";
import HotelsForm from "./pages/HotelsForm";
import useIsLogedIn from "./hooks/isLogedIn";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
// import SearchBar from "./components/search/SearchBar";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

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
        isLoggedIn
          ? { path: "/my-hotels", element: <MyHotels /> }
          : { path: "/my-hotels", element: <MyHotels /> },
        isLoggedIn
          ? { path: "/edit-hotel/:hotelId", element: <EditHotel /> }
          : { path: "/edit-hotel/:hotelId", element: <EditHotel /> },
        { path: "/search", element: <Search /> },
        { path: "/detail/:hotelId", element: <Detail /> },
        { path: "/hotel/:hotelId/booking", element: <Booking /> },
        { path: "/my-bookings", element: <MyBookings /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
