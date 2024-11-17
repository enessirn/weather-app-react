import { useContext } from "react";
import HourlyCard from "./HourlyCard";
import ApiContext from "../context/ApiContext";

function HourlyWeather() {
  const { result } = useContext(ApiContext);

  const currentHour = new Date().getHours() + 1;

  if (
    !result ||
    !result.forecast ||
    !result.forecast.forecastday ||
    !result.forecast.forecastday[0] ||
    !result.forecast.forecastday[0].hour
  ) {
    return <p>Loading...</p>;
  }

  const forecastData = result.forecast.forecastday[0];

  return (
    <div className="mt-4">
      <h1 className="mb-2">Hourly Forecast</h1>
      <div className="flex flex-row w-full flex-wrap overflow-hidden max-h-94 gap-1">
        
        {forecastData.hour
          .slice(currentHour, currentHour + 6) 
          .map((item, index) => (
            <HourlyCard
              key={index}
              time={ currentHour <10 ? '0' + (currentHour + index) : currentHour + index}
              temp={item.temp_c}
              status={item.condition.text}
            />
          ))}
      </div>
    </div>
  );
}

export default HourlyWeather;
