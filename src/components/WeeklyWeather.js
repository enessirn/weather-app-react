import { useContext } from "react";
import WeeklyCard from "./WeeklyCard";
import ApiContext from "../context/ApiContext";

function WeeklyWeather() {
  const { result } = useContext(ApiContext); 
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 


  if (!result || !result.forecast || !result.forecast.forecastday) {
    return null;
  }

  const forecastData = result.forecast.forecastday; 

  return (
    <div className="max-h-62 flex flex-row gap-3 mt-16 md:px-10 px-4 scale-75">
      {forecastData.map((item, index) => (
        <WeeklyCard
          key={index}
          day={index === 0 ? "Today" : weekday[new Date(item.date).getDay()]}
          temp={item.day.avgtemp_c} 
          status={item.day.condition.text} 
          classes={`${index === 3 ? 'hidden md:flex' : ''}${index === 4 ? 'hidden md:flex' : ''}${index === 0 ? 'border border-border-light' : ''}`}
        />
      ))}
    </div>
  );
}

export default WeeklyWeather;
