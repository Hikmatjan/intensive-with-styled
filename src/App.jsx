import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Carousel";
import MainCategory from "./components/MainCategory";
import Cars from "./components/Car";

const App = () => {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Home />
      <MainCategory />
      <Cars />
    </div>
  );
};

export default App;
