import React from "react";
import { useEffect, useState } from "react";
import {
  UilTemperature,
  UilTemperatureHalf,
  UilTemperatureEmpty,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const api = {
  key: "4b954db3c87d7eb58f2b444c35b6b522",
  base: "https://api.openweathermap.org/data/2.5/",
};

const TempAndDetails = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(`${api.base}weather?q=Bukulti&units=metric&lang=la&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
        // console.log(weather);
      });
  }, []);

  if (weather) {
    return (
      <>
        <div className="flex items-center justify-center text-2xl text-cyan-300">
          <p>{weather.weather[0].description}</p>
          <img
            className="ml-2 flex items-center justify-center pt-2"
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt=""
          />
        </div>
        <div className="flex flex-row items-center justify-center py-2 text-white">
          <p className="text-5xl mr-2">{weather.main.temp}°C</p>
          <div className="flex flex-col space-y-2 px-2">
            <div className="flex font-light text-sm items-center justify-start">
              <UilTemperatureHalf size={18} className="mr-1" />
              Pēc čuja:
              <span className="font-medium ml-1">
                {weather.main.feels_like}°C
              </span>
            </div>
            <div className="flex font-light text-sm items-center justify-start">
              <UilTear size={18} className="mr-1" />
              Spiediens:
              <span className="font-medium ml-1">
                {weather.main.pressure}hPa
              </span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Vēja ātrums:
              <span className="font-medium ml-1">{weather.wind.speed}m/s</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
          <UilSun />
          <p className="font-light">
            Lec: <span className="font-medium ml-1">{weather.sys.sunrise}</span>
          </p>
          <p>|</p>
          <UilSunset />
          <p className="font-light">
            Riet: <span className="font-medium ml-1">{weather.sys.sunset}</span>
          </p>
          <p>|</p>

          <UilTemperatureEmpty size={18} />
          <p className="font-light">
            dienas min:{" "}
            <span className="font-medium ml-1">{weather.main.temp_min}</span>
          </p>
          <p>|</p>

          <UilTemperature size={18} />
          <p className="font-light">
            dienas max:{" "}
            <span className="font-medium ml-1">{weather.main.temp_max}</span>
          </p>
        </div>
      </>
    );
  }
};

export default TempAndDetails;
