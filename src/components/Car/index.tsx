import { Pagination } from "antd";
import React from "react";

const Cars = () => {
  return (
    <div className="flex justify-end items-center mt-[90px]">
      <div>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default Cars;
