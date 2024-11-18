import React from "react";
import DateAndLocation from "./components/DateAndLocation";
import CurrentTemperature from "./components/CurrentTemperature";
import WeeklyWeather from "./components/WeeklyWeather";
import SecondContent from "./SecondContent";

function Container() {
  return (
    <div className="container !select-none max-w-[1200px] mx-auto bg-secondary-light h-[600px] flex justify-between rounded-3xl">
      <div className="w-full rounded-3xl h-full scale-75 md:scale-100">
        <DateAndLocation />
        <CurrentTemperature />
        <WeeklyWeather />
      </div>

      <div className="hidden bg-text-light h-full w-2/4 lg:block rounded-3xl">
        <div className="text-3xl text-center mt-4 font-semibold text-black w-full">
          <SecondContent />
        </div>
      </div>
    </div>
  );
}

export default Container;
