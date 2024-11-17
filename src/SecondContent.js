import React, { useEffect, useState } from "react";
import SearchCity from "./components/SearchCity";
import HourlyWeather from "./components/HourlyWeather";

function SecondContent() {
  const[fullTime, setFullTime] = useState("");

  const timeState = () => {
    const hour = fullTime.substring(0, 2);
    if (hour > 17) {
      return "Good Evening!";
    } else if (hour > 5) {
      return "Good Morning!";
    } else if (hour > 11) {
      return "Good Afternoon!";
    } else {
      return "Good Night!";
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      setFullTime(
        `${time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:${
          time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
        }:${
          time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
        }`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="!overflow-hidden">
      <div>
        <p>{fullTime && timeState()}</p>
        {fullTime && fullTime}
      </div>
      <div className="mt-12">
        <SearchCity />
      </div>
      <div>
          <HourlyWeather/>
      </div>
    </div>
  );
}

export default SecondContent;
