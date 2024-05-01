import React from "react";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import Small from "./Small";
import Sail from "./Sail";

const Dashboard = () => {
  return (
    <div className="mt-5 min-w-[310px] h-[310px] bg-[#F5F5F5] p-3 max-lg:hidden h-fit ">
      <Categories />
      <PriceRange />
      <Small />
      <Sail />
    </div>
  );
};

export default Dashboard;
