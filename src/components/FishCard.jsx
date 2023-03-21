import React from "react";
import fishdata from "./FishDatabase";

const FishCard = () => {
  return (
    <div id="zives" className="max-w-[1400px] m-auto md:pl-20 p-4 mb-10">
      <h1 className="text-4xl font-bold text-center mb-4">Zives</h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  gap-2 py-2">
        {fishdata.map((fish) => (
          <div
            className="bg-gray-100 rounded-xl flex flex-col justify-center items-center drop-shadow-md"
            key={fish.id}
          >
            <img
              className="rounded-tl-xl rounded-tr-xl w-full h-3/4 "
              src={fish.image}
              alt=""
            />
            <h2 className="">{fish.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishCard;
