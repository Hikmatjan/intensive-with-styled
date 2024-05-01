import {} from "antd";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React from "react";

const FlowerCard = () => {
  return (
    <div className="mt-[30px] flex gap-3 ">
      <div className="group h-[300px] w-[300px] bg-[#f5f5f5] flex justify-center items-center relative cursor-pointer ">
        <img src="" alt="" className="w-fit h-fit " />
        <div className=" gap-2 absolute bottom-5 hidden group-hover:flex">
          <div className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl">
            <ShoppingCartOutlined />
          </div>
          <div className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl">
            <HeartOutlined />
          </div>
          <div className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl">
            <SearchOutlined />
          </div>
        </div>
        <h3>Gullar</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>

      {/* <div>
        <div className="w-[258px] h-[250px] bg-[#FBFBFB] flex justify-center items-center  ">
          <img src="" alt="" className="w-fit h-fit " />
        </div>
        <h3>Gullar</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="w-[258px] h-[250px] bg-[#FBFBFB] flex justify-center items-center  ">
          <img src="" alt="" className="w-fit h-fit " />
        </div>
        <h3>Gullar</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div> */}
    </div>
  );
};

export default FlowerCard;
