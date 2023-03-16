import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "8d1080865ec4084a0272f86247812dbb",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <div>
      <div>
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Munich"
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast
        />
      </div>
      <div>test WEATHER</div>
    </div>
  );
};

export default Weather;
