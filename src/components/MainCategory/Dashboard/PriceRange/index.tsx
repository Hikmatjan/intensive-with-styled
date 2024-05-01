import React, { useState } from "react";
import { Slider } from "antd";

const PriceRange = () => {
  const min = 0;
  const max = 100;
  const [price, setprice] = useState([]);
  return (
    <div className="mt-4">
      <h1 className="font-bold">Price range</h1>
      <Slider
        onChange={() => {
          setprice;
        }}
      />
      Price: <span className="font-bold text-[#46A358]"> 0$ - 12$</span>
      <button className="bg-[#46A358] flex rounded-md items-center justify-center text-base text-white mt-8 w-[90px] h-9 max-md:mt-3">
        Filter
      </button>
    </div>
  );
};

export default PriceRange;
