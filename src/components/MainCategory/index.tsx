import React from "react";
import Dashboard from "./Dashboard";
import FlowerContainer from "./FlowerContainer";

const MainCategory = () => {
  return (
    <div className=" w-full m-auto flex mt-6 gap-12 ">
      <Dashboard />
      <FlowerContainer />
    </div>
  );
};

export default MainCategory;
