import React, { useState } from "react";
import { Slider } from "antd";
const min = 0;
const max = 1000;

const PriceRange = () => {
  const [price, setprice] = useState<[number, number]>([0, 1000]);
  return (
    <div className="mt-4">
      <h1 className="font-bold">Price range</h1>
      <Slider
        range
        defaultValue={price}
        min={0}
        max={1000}
        onChange={(e) => setprice(e)}
      />
      Price:{" "}
      <span className="font-bold text-[#46A358] ">
        {" "}
        {price[0]}$ - {price[1]}$
      </span>
      <button className="bg-[#46A358] flex rounded-md items-center justify-center text-base text-white mt-8 w-[90px] h-9 max-md:mt-3">
        Filter
      </button>
    </div>
  );
};

export default PriceRange;
