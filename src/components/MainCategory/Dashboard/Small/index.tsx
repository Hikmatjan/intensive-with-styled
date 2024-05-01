import React from "react";

const Small = () => {
  return (
    <div>
      {" "}
      <div className="mt-[46px]">
        <h1 className="font-bold">Size</h1>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h3 className="p-2 cursor-pointer">Small</h3>
            <h3 className="p-2 cursor-pointer">Medium</h3>
            <h3 className="p-2 cursor-pointer">Large</h3>
          </div>
          <div>
            <h3 className="p-2">(119)</h3>
            <h3 className="p-2">(86)</h3>
            <h3 className="p-2">(78)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Small;
