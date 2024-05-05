import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const Blogs = () => {
  return (
    <div className="mt-[100px]">
      <div className="text-center text-3xl ">
        <h1 className="font-bold">Our Blog Posts</h1>
        <p className="mt-[15px] text-sm font-normal text-[#727272]  max-lg:text-xs ">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="mt-[30px] grid grid-cols-4 gap-4 max-sm:grid-cols-2">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/4f35/4de5/b3a1897ab9540ae4953f1e0f0ace9952?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifCuvN0Snz8IvlGT8wpFAzB763ETcIoSpquVsB-jQhA1Qhj4tfU75Bq9zUV-bGObaZv~XZJ5o7VBzR-axN~aBX260ad1TIMLon1yfM0ggt7rPw7woPtZR-9MlrpLu8G9LN8nfsSj0yUUnvjlqmY3o5km00iI5Ng9AtksVPTBUccPgL8bSb7JIVQteM9GuZiZ414RWE8c99tBwgCpdgeKh~UNhatKc0wL612YEVzAlxW~aAp~LQ9oMZA8mauSB0ClR~2U4oHvqbcUDyupFd1pj4O1KfHpgdvdj8RUGQIbCOpXkrALH2RZW43SpI4vZJGloQMcOnj4yCzdHapBdJrQfA__"
            alt=""
          />
          <div className="bg-[#FBFBFB]">
            <h3 className="text-[#46A358]">September 12 | Read in 2 minutes</h3>
            <h1 className=" mt-1 font-bold text-2xl max-lg:text-sm max-md:text-xs max-md:mt-4">
              Cactus & Succulent
            </h1>
            <h1 className="  font-bold text-2xl max-lg:text-sm max-md:text-xs max-md:mt-4">
              Care Tips
            </h1>
            <p className="  text-sm font-normal text-[#727272]  max-lg:text-xs mt-1 ">
              Cacti are succulents are easy care plants for any home or patio.
            </p>
            <button
              className="text-sm font-medium mt-1 gap-2  hover:text-[#46A358]"
              type="button"
            >
              Read More
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/5d6a/fe05/19b43ea40d6912ed9f6c86bde26ac437?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YEfRtFKJ0lHw3ml-l-j8o4CFL5Ecu9scxcgf8kFgvvQk9Kc6YSGQDwQ7gF-7b3TJ8lOk9zc36lJiFiie40477j2ol96FXt93zo7LJPEdcwwQPO2rvrrL3TlRcAjGjvHFB3qlPfVraYRRYXdZbzM-fc~A0RZUElAenLnCNscMw1fWUqybJf-6dmeu5v40ZoWca13SW2xJ7GQxXWqjyemip7wTOr~-4KDqByYLBHDMiBUemywCKr4GCTJJE4CfBsAHxoNpSNJIKOuFgjw-5Ie9C5VjWfGF-i5jl1sFapdsN9n8-ghFNjF-8PtMmonU4Xc0qrxa62eMpwqJI6s1Zl5qRA__"
            alt=""
          />
          <div className="bg-[#FBFBFB]">
            <h3 className="text-[#46A358]">September 12 | Read in 2 minutes</h3>
            <h1 className=" mt-1 font-bold text-2xl max-lg:text-sm max-md:text-xs max-md:mt-4">
              Top 10 Succulents for Your Home
            </h1>
            <p className="  text-sm font-normal text-[#727272]  max-lg:text-xs mt-1 ">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <button
              className="text-sm font-medium mt-1 gap-2 hover:text-[#46A358]"
              type="button"
            >
              Read More
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/708d/5ac3/4916119d54b3f3ce81cb3585303dc87b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CarTEg6rthLcUV7e3x1jboSIzpBMa674PNPKl78ZEP9~2X~Hq6rKLWkGaAbyLsheEU3odpqGDILJQFDhyLtP3NhTlVTt1KqxYv1jGR7HsbJxc0oakc-JEb62CtQx4QjdwV-mw70Dqm7Jy2Z1mImV-vEb3HaCeF0nlNjTqYTOlbzjVQqGVcHnMoUBOds1hRMzTK9gi-zZF6BKgL2lfEyeZnVOPjasSW4tRe25CuAx~W6DXilaaIUMgYmujNxWLZRWSJ3qRMWrjXzKc8skViJsvQXeeSvOGYiSq9XxE6-gFCsIoewai10y8lhgWwEhctCWFZNcEsY5r2WejkesorD4rQ__"
            alt=""
          />
          <div className="bg-[#FBFBFB]">
            <h3 className="text-[#46A358] ">
              September 12 | Read in 2 minutes
            </h3>
            <h1 className=" mt-1 font-bold text-2xl max-lg:text-sm max-md:text-xs max-md:mt-4">
              Cacti & Succulent Care Tips
            </h1>
            <p className="  text-sm font-normal text-[#727272]  max-lg:text-xs mt-1 ">
              Cacti and succulents thrive in containers and because most are..
            </p>
            <button
              className="text-sm font-medium mt-1 gap-2 hover:text-[#46A358]"
              type="button"
            >
              Read More
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/76ec/a5ae/aad8a62909bb4bd3fb02922695ada788?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jecRJDCxoLr~kJfvnhL5eAcslFxXzZfzqIiFx0r687mi4GcZSH4vAJMu8S1iibO1oFtwp3h1zzdDUtHZYA0gPc98WBP9JxoTps4Aw1oMIAloe9R7qPjhyZJkvmpXB9GRuONdir4WTcAl0h8CoVOP2C7grq1LppfnbaSAuwGtNt-E4oSFbuP2tOFMcIRqUQhLTzf55~X-uP49YJbyGpY0pxDEIZ6g9E1KCN2ICtjqE~frfZo6rR-brL8DqyY~gYlkuOppAa8Hrd2lRdY6Cb2fL6a~wrPtJDGKjsCsKGXv1UssUh-L5inctle7lhxIXxgN7sUCQGwZIif9Y8hdRQXS5Q__"
            alt=""
          />
          <div className="bg-[#FBFBFB]">
            <h3 className="text-[#46A358]">September 12 | Read in 2 minutes</h3>
            <h1 className=" mt-1 font-bold text-2xl max-lg:text-sm max-md:text-xs max-md:mt-4">
              Best Houseplants Room by Room
            </h1>
            <p className="  text-sm font-normal text-[#727272]  max-lg:text-xs mt-1 ">
              The benefits of houseplants are endless. In addition to..
            </p>
            {/* <Button
              className="text-sm font-medium mt-1 hover:bg-[#46A358]"
              type="text"
            >
              Read More
              <ArrowRightOutlined />
            </Button> */}
            <button
              className="text-sm font-medium mt-1 gap-2 hover:text-[#46A358]"
              type="button"
            >
              Read More
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
