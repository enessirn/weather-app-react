import React from "react";

function HourlyCard() {
  return (
    <div
      className={`flex flex-col ml-4 mb-4 max-w-56 px-2 h-40 py-8 rounded-3xl cursor-pointer border-border-light border hover:shadow-md transition`}
    >
      <h2 className="text-xl font-semibold">1 PM</h2>
      <p className="text-text-dark text-3xl ml-2">25°</p>
      <p className="text-border-light text-xl">Cloudly</p>
    </div>
  );
}

export default HourlyCard;
