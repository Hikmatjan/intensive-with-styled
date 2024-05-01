import React from "react";
import { Carousel } from "antd";

const Home = (props) => {
  // const { title } = props();
  return (
    <div className="mt-3">
      <div>
        <Carousel autoplay className="w-[100%] h-[450px] bg-[#F5F5F5]">
          <div>
            <div className="w-[100%] flex justify-center items-center">
              {" "}
              <div className="w-[60%] ml-[40px]">
                <h3 className="font-medium text-base max-lg:text-sm max-md:text-xs max-md:mt-4">
                  WELCOME TO GREENSHOP
                </h3>
                <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                  LET'S MAKE A BETTER
                  <span className="text-[#46A358]"> PLANET</span>
                </h1>
                <p className="text-sm font-normal text-[#727272]  max-lg:text-xs mt-3 ">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. <br /> Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-8 w-[140px] h-9 max-md:mt-3">
                  SHOP NOW
                </button>
              </div>
              <div className="w-[40%] ">
                <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
                    alt="img-1"
                  />
                  <img
                    className="absolute bottom-0 left-0"
                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&amp;token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
                    alt="img-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%] flex justify-center items-center">
              {" "}
              <div className="w-[60%] ml-[40px]">
                <h3 className="font-medium text-base max-lg:text-sm max-md:text-xs max-md:mt-4">
                  WELCOME TO GREENSHOP
                </h3>
                <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                  LET'S LIVE IN A BETTER
                  <span className="text-[#46A358]"> PLANET</span>
                </h1>
                <p className="text-sm font-normal text-[#727272]  max-lg:text-xs mt-3 ">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. <br /> Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-8 w-[140px] h-9 max-md:mt-3">
                  LET'S START
                </button>
              </div>
              <div className="w-[40%] ">
                <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
                    alt="img-1"
                  />
                  <img
                    className="absolute bottom-0 left-0"
                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&amp;token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
                    alt="img-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%] flex justify-center items-center">
              {" "}
              <div className="w-[60%] ml-[40px]">
                <h3 className="font-medium text-base max-lg:text-sm max-md:text-xs max-md:mt-4">
                  WELCOME TO GREENSHOP
                </h3>
                <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                  LET'S OBSERVE A BETTER
                  <span className="text-[#46A358]"> PLANET</span>
                </h1>
                <p className="text-sm font-normal text-[#727272]  max-lg:text-xs mt-3 ">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. <br /> Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-8 w-[140px] h-9 max-md:mt-3">
                  GET CREDITS
                </button>
              </div>
              <div className="w-[40%] ">
                <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
                    alt="img-1"
                  />
                  <img
                    className="absolute bottom-0 left-0"
                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&amp;token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
                    alt="img-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
