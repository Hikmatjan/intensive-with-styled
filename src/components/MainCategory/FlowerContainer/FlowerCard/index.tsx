import { Pagination } from "antd";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React from "react";

const FlowerCard = () => {
  return (
    <div className="mt-[30px] grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
          <img
            src="https://s3-alpha-sig.figma.com/img/586c/8523/1ab58d21463d86aa3768f5c6c78f8a1f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iE4LBJqihkTCH0UqJuA641oNcI6cHe1hxT8CEEtNMWKEmUtuSfSFpBsrNBlvkiWqWgVyxP~JAGViZS7K4S7sSmTA1jh0qLbcR9M4tvYnBbZy8KH7HYCWpbgGmFh~K~IS5rkMqlujPHSHkWJ2PnGKFO15o99oUBDWQIBfBdi2BOVmk7P9IbXSbcvo7KOer9XkI0qXW938fxff1gI4Hr9nhHXISTE74-P1vmKHPY~7EVhVX5lJ-239bKL4ohEnHreULpMKYHta7hljki~WBRwOVw7z3mW3coL8Xutq8z1N0KuAZU2jmutPpJ46amR9tOfbxbko4taloU4hfA83Yu59dQ__"
            alt=""
            className="w-fit h-fit "
          />
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
          <img
            src="https://s3-alpha-sig.figma.com/img/4826/f3a4/1a2148d881d8376b26471cced915b1bb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBwZ7AfaEHj3Ml2lSOAMnxtbrj9LMv~gzTQ0V3BMHW4qAUDgBsZnKpsQoo3mnrKZOsYxQnhYUiiz8-xA5blrtexHlJkDJ2CVqE-y4F9vGabH-zeFHOu1QDVXRKzIQpGqLfK~~tfyhlZq42ZP3eAg6Bg4uabQAWJPbGPymITITNDOTzO3rDwblPDSn-HPQIA1~~F8DsKgISxitBY7zs6bd1SucbO2oZteNpMK-T~4cotpsmpvtxT3NKPQpQq5yWidihCYn--7W9E8zC3~-k41TnLXp7CjqiKTJ8Z~RwfbW7I-aeoSUkE7CDcqlKoU7KOiqms4BOug6roZCEub3FVOUA__"
            alt=""
            className="w-fit h-fit "
          />
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
      <div>
        <div className="group h-[300px] bg-[#FBFBFB] flex justify-center items-center relative cursor-pointer  ">
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
        </div>
        <h3>Barbertoon</h3>
        <p className="text-[#46A358]">$199.00</p>
      </div>
    </div>
  );
};

export default FlowerCard;
