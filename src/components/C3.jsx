import React from "react";

function C3() {
  return (
    <div className="h-screen items-center justify-center ">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col md:flex-row w-[70%] items-center space-y-4 ">
          <div className="flex-col space-y-4 text-center md:w-1/2 w-[80%]">
            <div className="text-fuchsia-600 text-xl font-medium">WLC</div>
            <div className="text-5xl font-medium">
              Westmin Lending Corporation
            </div>
            <div className="text-gray-500">
              Westmin Lending Corporation engages in Lending Services.
            </div>
            <div className="flex items-center justify-center">
              {/* <div className="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">
                Visit Homepage
              </div> */}
            </div>
          </div>
          <div className="md:w-96 w-[70%] md:h-96 h-48  bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/800x1200/?robot,error"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default C3;
