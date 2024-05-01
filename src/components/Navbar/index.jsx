import React from "react";
import { Badge } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className=" flex p-[30px] border-b border-[#46a358]">
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt="logo"
        />
      </div>
      <div className="flex-1 flex  justify-center items-center gap-8 max-sm:hidden">
        <h3 className="cursor-pointer">Home</h3>
        <h3 className="cursor-pointer">Shop</h3>
        <h3 className="cursor-pointer">Plant care</h3>
        <h3 className="cursor-pointer">Blogs</h3>
      </div>
      <div className="flex  justify-end items-center gap-8 max-sm:hidden">
        <SearchOutlined className="text-lg w-[20px] h-[20px]" />
        <Badge dot>
          <ShoppingCartOutlined className="text-lg" />
        </Badge>

        <button className="w-[100px] h-[35px] bg-[#46A358]  rounded-md flex justify-center items-center gap-2 text-white">
          <LoginOutlined /> Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
