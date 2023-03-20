import React from "react";
import { useEffect, useState } from "react";

const api = {
  key: "4b954db3c87d7eb58f2b444c35b6b522",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Forecast = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    fetch(`${api.base}forecast?q=Bukulti&units=metric&appid=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.main);
        // console.log(data);
        // console.log(weather);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium"> 5 dienu prognoze</p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">1diena</p>
          <p>kkāda bilde</p>
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">1diena</p>
          <p>kkāda bilde</p>
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">1diena</p>
          <p>kkāda bilde</p>
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">1diena</p>
          <p>kkāda bilde</p>
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">1diena</p>
          <p>kkāda bilde</p>
          <p className="font-medium">22</p>
        </div>
      </div>
    </>
  );
};

export default Forecast;
