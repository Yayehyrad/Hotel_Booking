import Carousel from "./Carousel";

import About from "./About";

import Rooms from "./Rooms";
import Sliders from "./Slider";
import SearchBar from "../search/SearchBar";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="w-full relative items-center justify-center hidden lg:flex">
        <SearchBar />
      </div>
      <About />
      <Rooms />
      <Sliders />
    </>
  );
}
