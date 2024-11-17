import React from "react";

function HourlyCard({time,temp,status}) {
  return (
    <div
      className={`flex flex-col ml-4 w-24 px-2 h-40 py-8 rounded-3xl cursor-pointer border-border-light border hover:shadow-md transition mb-2`}
    >
      <h2 className="text-xl font-semibold">{time}</h2>
      <p className="text-text-dark text-2xl ml-2">{temp}°</p>
      <p className="text-border-light text-lg">{status}</p>
    </div>
  );
}

export default HourlyCard;
