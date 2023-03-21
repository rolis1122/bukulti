import React from "react";
import { useEffect, useState } from "react";

const api = {
  key: "4b954db3c87d7eb58f2b444c35b6b522",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Forecast = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(`${api.base}forecast?q=Bukulti&units=metric&cnt=6&appid=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        // console.log(data);
        // console.log(weather);
      });
  }, []);
  if (weather) {
    return (
      <>
        <div className="flex items-center justify-start mt-5 mb-2 ml-2">
          <p className="text-white font-medium"> tuvākās nākotnes prognoze:</p>
        </div>
        <hr className="my-1" />
        <div className="flex flex-row mx-2 items-center justify-between text-white">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-[12px]">
              {weather.list[1].dt_txt.slice(5, 16)}
            </p>
            <img
              src={`http://openweathermap.org/img/w/${weather.list[1].weather[0].icon}.png`}
              alt=""
            />
            <p className="text-md font-medium">{weather.list[1].main.temp}°C</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-[12px]">
              {weather.list[2].dt_txt.slice(5, 16)}
            </p>
            <img
              src={`http://openweathermap.org/img/w/${weather.list[2].weather[0].icon}.png`}
              alt=""
            />
            <p className="text-md font-medium">{weather.list[2].main.temp}°C</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-[12px]">
              {weather.list[3].dt_txt.slice(5, 16)}
            </p>
            <img
              src={`http://openweathermap.org/img/w/${weather.list[3].weather[0].icon}.png`}
              alt=""
            />
            <p className="text-md font-medium">{weather.list[3].main.temp}°C</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-[12px]">
              {weather.list[4].dt_txt.slice(5, 16)}
            </p>
            <img
              src={`http://openweathermap.org/img/w/${weather.list[4].weather[0].icon}.png`}
              alt=""
            />
            <p className="text-md font-medium">{weather.list[4].main.temp}°C</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-[12px]">
              {weather.list[5].dt_txt.slice(5, 16)}
            </p>
            <img
              src={`http://openweathermap.org/img/w/${weather.list[5].weather[0].icon}.png`}
              alt=""
            />
            <p className="text-md font-medium">{weather.list[5].main.temp}°C</p>
          </div>
        </div>
      </>
    );
  }
};

export default Forecast;
