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
        // console.log(data);
        // console.log(weather);
      });
  }, []);

  if (weather) {
    let sunrise = new Intl.DateTimeFormat("lv-LV", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(weather.sys.sunrise * 1000);

    let sunset = new Intl.DateTimeFormat("lv-LV", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(weather.sys.sunset * 1000);

    return (
      <>
        <div className="flex flex-wrap flex-row min-w-fit items-center justify-center text-2xl text-cyan-300">
          <p className="mr-3">{weather.weather[0].description}</p>
          <img
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
        <div className="flex flex-wrap flex-row items-center justify-center space-x-2 mx-2 text-white text-sm py-3">
          <UilSun />
          <p className="font-light">
            Lec: <span className="font-medium ml-1">{sunrise}</span>
          </p>
          <p>|</p>
          <UilSunset />
          <p className="font-light">
            Riet: <span className="font-medium ml-1">{sunset}</span>
          </p>
          <p>|</p>
        </div>
      </>
    );
  }
};

export default TempAndDetails;
