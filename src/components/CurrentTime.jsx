import React from "react";

const CurrentTime = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const laiks = date.toLocaleString("lv-LV", options);
  return (
    <div className="flex items-center justify-center my-2">
      <p className="text-white text-xl font-xl">
        {laiks} {showTime}
      </p>
    </div>
  );
};

export default CurrentTime;
