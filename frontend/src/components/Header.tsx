import { Link } from "react-router-dom";
import useIsLogedIn from "../hooks/isLogedIn";
import SignOutButton from "./auth/SignOutButton";
// import { useAppContext } from "../contexts/AppContext";
// import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useIsLogedIn();

  return (
    <div className="bg-dark  py-6 z-50">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Euphoria</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/signin"
              className=" flex bg-white items-center text-blue-600 px-3 font-bold hover:text-blue-950"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
