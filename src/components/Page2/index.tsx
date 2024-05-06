import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const Card2 = () => {
  return (
    <div className="w-full flex gap-2 mt-[150px]">
      <div className="  relative flex justify-end w-[50%]  h-[250px] bg-[#FBFBFB]">
        <div className="w-[40%]">
          <img
            src="https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdWtkl6PPmvwsiV2p4iZ7F1vxcrUDJw-ywVMbTcAamJmXH0BFwCnxJ7NksgGMGR9DJcqkM4HEW0wv9KJUb0-eXzQDLzGqNChtKx1x5gLkxn7NBeEgcQjk10Qu0Frys84Ql0vvdQmw6a8fkWH8aSCPEieUsRz1Kqjnwb2cKOWEmB7gjoTrJLZbSZUbte9kE-JggdDg8SWKa6u3sDdwda7OVFj94P9WNM2Y65gYT4FxWmFgWqL~AvcD5gUDrjaQZUzgACAFHMrEDWYkf3IpKtRJFMnqyVMDPq8RZCc5zeaQQ1RDUelnPDET7eHHwDsnG3fbMEvp9bm3r7HJi923TtDvg__"
            alt=""
            className="w-[292px] h-[250px] absolute top-[-30px]"
          />
        </div>
        <div className="w-[60%] mt-8 ">
          <h1 className=" ml-[150px] font-medium text-base max-lg:text-sm max-md:text-xs max-md:mt-4">
            SUMMER CACTUS
          </h1>
          <h1 className=" ml-[170px] font-medium text-base max-lg:text-sm max-md:text-xs max-md:mt-4">
            & SUCCULENTS
          </h1>
          <p className=" ml-[15px] text-sm font-normal text-[#727272]  max-lg:text-xs mt-2 ">
            We are an online plant shop offering a wide
          </p>
          <p className=" ml-[80px] text-sm font-normal text-[#727272]  max-lg:text-xs mb-3 ">
            range of cheap and trendy plants.
          </p>
          <button
            type="button"
            className=" ml-[150px] bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-8 w-[140px] h-9 max-md:mt-3"
          >
            Find More
            <ArrowRightOutlined />
          </button>
        </div>
      </div>
      <div className=" relative flex justify-end w-[50%]  h-[250px] bg-[#FBFBFB]">
        <div className="w-[40%]">
          <img
            src="https://www.figma.com/file/BeJ7F91dnIOSwVdvcRwMqn/image/7c597aa91ee5df5d1fd65d8184246c0c9918f920"
            alt=""
            className="w-[292px] h-[250px]  absolute top-[-30px] "
          />
        </div>
        <div className="w-[60%] mt-8 ">
          <h1 className="ml-[150px] font-medium text-base max-lg:text-sm max-md:text-xs max-md:mt-4">
            STYLING TRENDS
          </h1>
          <h1 className=" ml-[170px] font-medium text-base max-lg:text-sm max-md:text-xs max-md:mt-4">
            & MUCH MORE
          </h1>
          <p className=" ml-[15px] text-sm font-normal text-[#727272]  max-lg:text-xs mt-2 ">
            We are an online plant shop offering a wide
          </p>
          <p className=" ml-[80px] text-sm font-normal text-[#727272]  max-lg:text-xs mb-3 ">
            range of cheap and trendy plants.
          </p>
          <button
            type="button"
            className=" ml-[150px] bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-8 w-[140px] h-9 max-md:mt-3"
          >
            Find More
            <ArrowRightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
