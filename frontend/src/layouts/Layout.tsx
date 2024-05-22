// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import { Outlet } from "react-router-dom";
// import Hero from "../components/Hero";
// import SearchBar from "../components/SearchBar";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// interface Props {
//   children: React.ReactNode;
// }

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto">{/* <SearchBar /> */}</div>
      <main className="container mx-auto py-10 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
