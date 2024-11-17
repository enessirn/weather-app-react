import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
function DateAndLocation() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    const fullDate = new Date();
    const fullTime = `${fullDate.getDate()}.${
      fullDate.getMonth() + 1
    }.${fullDate.getFullYear()} `;
    setDate(fullTime);
  }, []);
  return (
    <div className="w-full h-12rounded-3xl px-6 flex justify-between text-xl items-center pt-2 ">
      <div className="w-3/4 cursor-pointer">
        <FontAwesomeIcon icon={faLocationDot} className="text-2xl mr-2" />
        <b className="text-secondary">Samsun</b>
      </div>
      <div className="w-full">
        <b className="text-secondary">{date}</b>
      </div>
    </div>
  );
}

export default DateAndLocation;
