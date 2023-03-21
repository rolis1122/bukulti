import React from "react";

const CurrentTime = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  let laiks = date.toLocaleString("lv-LV", options);

  return (
    <div className="flex items-center justify-center">
      <p className="text-white text-md">{laiks}</p>
    </div>
  );
};

export default CurrentTime;
