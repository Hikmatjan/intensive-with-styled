import { Button, Input } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[100px] bg-[#FBFBFB]">
      <div className="mt-[30px] grid grid-cols-4 gap-4 max-sm:grid-cols-2">
        <div className="m-[23px] pr-[23px] border-r border-[#46A358] max-sm:border-r-0 max-sm:border-b-2 pb-[23px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
            alt=""
          />
          <h3 className=" mt-1 font-medium text-2xl max-lg:text-sm max-md:text-xs max-md:mt-4">
            Garden Care
          </h3>

          <p className="  text-sm font-normal text-[#727272]  max-lg:text-xs mt-1 ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="m-[23px] pr-[23px] border-r border-[#46A358] max-sm:border-r-0 max-sm:border-b-2 pb-[23px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a"
            alt=""
          />
          <h3 className=" mt-1 font-medium text-2xl max-lg:text-sm max-md:text-xs max-md:mt-4">
            Plant Renovation
          </h3>

          <p className="  text-sm font-normal text-[#727272]  max-lg:text-xs mt-1 ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="m-[23px] pr-[23px] pb-[23px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a"
            alt=""
          />
          <h3 className=" mt-1 font-medium text-2xl max-lg:text-sm max-md:text-xs max-md:mt-4">
            Plant Renovation
          </h3>

          <p className="  text-sm font-normal text-[#727272]  max-lg:text-xs mt-1 ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-base mt-[17px] mb-[9px]">
            Would you like to join newsletters?
          </h3>
          <div className="flex">
            <Input
              className="w-4/5 rounded-s-xl placeholder:font-light"
              placeholder="enter your email  adress"
            />
            <Button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-full w-1/5 rounded-none rounded-e-xl">
              Join
            </Button>
          </div>
          <p className="text-sm font-normal text-[#727272]  max-lg:text-xs mt-1 ">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="mt-[27px] bg-[#ECF6EE] flex p-[23px] justify-between items-center max-lg:items-center grid grid-cols-4 gap-4 max-sm:grid-cols-2">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt=""
          />
        </div>
        <div className="flex gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flocation.svg?alt=media&token=d600d0e4-aa9d-423d-8348-e3df90b195f3"
            alt="icon"
          />
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div className="flex gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Femail.svg?alt=media&token=8136c940-c139-486f-a6d3-be49bede2381"
            alt="icon"
          />
          <p>contact@greenshop.com</p>
        </div>
        <div className="flex gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fcall.svg?alt=media&token=3841a4f9-b499-4e8c-98d3-a05fe4edc39f"
            alt="icon"
          />
          <p>+88 01911 717 490</p>
        </div>
      </div>
      <div className="mt-[27px] flex p-[23px] justify-between items-center max-lg:items-center grid grid-cols-4 gap-4 max-sm:grid-cols-2">
        <div>
          <h3 className="font-medium">My Account</h3>
          <p className="cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            My account
          </p>
          <p className="cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Our stores
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Contact us
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Career
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Specials
          </p>
        </div>
        <div>
          <h3 className="font-medium">Help & Guide</h3>
          <p className="cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Help Center
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            How to Buy
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Shipping & Delivery
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Product Policy
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            How to Return
          </p>
        </div>
        <div>
          <h3 className="font-medium">Categories</h3>
          <p className="cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            House Plants
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Potter Plants
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Seeds
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Small Plants
          </p>
          <p className=" cursor-pointer text-sm font-normal text-[#3D3D3D]  max-lg:text-xs mt-1 ">
            Accessories
          </p>
        </div>
        <div>
          <h3 className="font-medium">Social Media</h3>
          <div className="flex gap-3 mt-[20px] ">
            <div className="border border-[#46A358] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
                alt="facebook"
              />
            </div>
            <div className="border border-[#46A358] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=dff411c8-b4c4-451d-820e-3f6752290ff5"
                alt="facebook"
              />
            </div>
            <div className="border border-[#46A358] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=9ab7ee69-e867-48b2-8d1c-978fd8d43835"
                alt="twitter"
              />
            </div>
            <div className="border border-[#46A358] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flinkedin.svg?alt=media&token=1ad547d5-0f83-4421-994e-6989dba5d0d7"
                alt="Linkidin"
              />
            </div>
            <div className="border border-[#46A358] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=2ab668d7-f49d-4c46-ae87-d8d49ae0849f"
                alt="Youtube"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <h3 className="font-medium">We accept</h3>
            <img
              src="https://s3-alpha-sig.figma.com/img/1e46/0c89/ee17b2b09a69f96d2552ed3b0b04ac05?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VixUASLcgTvQhOD7cqGcWKTl55E1Av7cg0kGkArv7wpKp0P4mEcvP3WT5294X0HykZxhthqfxOFWyK2LFaOk7cGLmWiEH9PZVBFTeQE7ygRKVhozUBzFjhvkWr-sLziAml~ksBtimjoFfQnwfe1yHno~03YnGC~WVkJXGTcQRSYdOtVMWMDA2UCLJWWcKwu3xPB~Z1B3~uq0i6KpGFDH2669EvRNj7gM99pzYMNkHX1NaYGLUEoQgxuiAti~6ep3P4sQq4BDwZuJyMTr7o5mCa6tiiZxHoEkkRuOs3x6b0pQyQ82E5cBkMTOWHcfng~8SubTeocYtg4Txm3dTPH--g__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
