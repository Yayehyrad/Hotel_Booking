// import SearchBar from "../components/search/SearchBar";

import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "../components/common/Header";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { Home } from "./Home/index";
// import Footer from "../components/common/Footer";
export default function HomePage() {
  return (
    <>
      <div>
        {/* <Router> */}
        <Header />
        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} /> */}
        {/* </Routes> */}
        {/* <Footer /> */}
        {/* </Router> */}
      </div>
    </>
  );
}

// import { useQuery } from "react-query";
// import * as apiClient from "../api-client";
// import LatestDestinationCard from "../components/LastestDestinationCard";

// const Home = () => {
//   const { data: hotels } = useQuery("fetchQuery", () =>
//     apiClient.fetchHotels()
//   );

//   const topRowHotels = hotels?.slice(0, 2) || [];
//   const bottomRowHotels = hotels?.slice(2) || [];

//   return (
//     <div className="space-y-3">
//       <h2 className="text-3xl font-bold">Latest Destinations</h2>
//       <p>Most recent desinations added by our hosts</p>
//       <div className="grid gap-4">
//         <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
//           {topRowHotels.map((hotel) => (
//             <LatestDestinationCard hotel={hotel} />
//           ))}
//         </div>
//         <div className="grid md:grid-cols-3 gap-4">
//           {bottomRowHotels.map((hotel) => (
//             <LatestDestinationCard hotel={hotel} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
