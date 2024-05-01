import React from "react";
import { Select } from "antd";

const FlowerTitle = () => {
  return (
    <div className=" w-full flex justify-between items-center">
      <div className="flex justify-between items-center gap-8  ">
        <h3 className=" font-normal cursor-pointer hover:text-[#46A358] border-b border-[#46A358]">
          All Plants
        </h3>
        <h3 className=" font-normal cursor-pointer hover:text-[#46A358]">
          New Arrivals
        </h3>
        <h3 className=" font-normal cursor-pointer hover:text-[#46A358]">
          Sale
        </h3>
      </div>
      <div className="flex items-center justify-center gap-2 max-lg:hidden">
        <p>Sortby:</p>
        <Select
          placeholder="Default Sorting"
          optionFilterProp="children"
          options={[
            {
              value: "Default Sorting",
              label: "Default Sorting",
            },
            {
              value: "The Cheapest",
              label: "The Cheapest",
            },
            {
              value: "Most expensive",
              label: "Most expensive",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FlowerTitle;
