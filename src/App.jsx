import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Carousel";
import MainCategory from "./components/MainCategory";
import Cars from "./components/Car";
import Card2 from "./components/Page2";
import Blogs from "./components/OurBlog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Home />
      <MainCategory />
      <Cars />
      <Card2 />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
