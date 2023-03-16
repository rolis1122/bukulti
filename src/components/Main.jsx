import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="./image-3.jpg"
        alt="main photo"
      />
      <div className="w-full h-screen absolute top-0 bg-gradient-to-r from-white/50">
        <div className="m-auto h-full w-full flex flex-col justify-center items-center ">
          <h1 className="sm:text-5xl text-4xl font-extrabold text-gray-800 drop-shadow-md">
            Šeit ir lieliski!
          </h1>
          <h2 className="flex sm:text-4xl text-3xl font-extrabold text-gray-800 drop-shadow-lg">
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
