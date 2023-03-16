import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main" className="mb-10">
      <img
        className="w-full h-screen object-cover"
        src="./image-3.jpg"
        alt="main photo"
      />
      <div className="w-full h-screen absolute top-0 bg-gradient-to-r from-white/20">
        <div className="m-auto h-full w-full flex flex-col justify-center items-center ">
          <h1 className="flex justify-center items-centersm:text-5xl text-4xl font-extrabold text-gray-800 drop-shadow-md">
            Šeit ir lieliski!
          </h1>
          <h2 className="flex justify-center align-middle sm:text-3xl text-2xl font-extrabold text-gray-800 drop-shadow-lg">
            Te
            <TypeAnimation
              sequence={[
                "ir klusums.",
                1500,
                "blakus ir ūdens.",
                1500,
                "dzīvo bebri un kraukļi",
                500,
                "dažreiz ķeras līdakas...",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
