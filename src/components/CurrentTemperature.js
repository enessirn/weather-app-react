import {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";
import ApiContext from "../context/ApiContext";
function CurrentTemperature() {
    const {result} = useContext(ApiContext)
  return (
    <div className="w-full h-2/5 flex flex-col items-center select-none">
      <div className="flex flex-row w-full justify-center">
        <div className="font-semibold text-[200px] flex flex-row justify-center text-text-dark">{result && result.current.temp_c}°</div>
        <div className="flex flex-col justify-center gap-3 mt-20">
          <div className="flex flex-row">
            <div className="w-12">
            <FontAwesomeIcon icon={faWind} size="2xl" className="text-text-dark" />
            </div>
            <b className="text-text-dark text-lg">{result && result.current.wind_kph} km/h</b>
          </div>
          <div className="flex flex-row">
          <div className="w-12">
            <FontAwesomeIcon icon={faDroplet} size="2xl" className="text-text-dark"/>
            </div>
            <b className="text-text-dark text-lg">{result && result.current.humidity}%</b>
          </div>
        </div>
      </div>

      <div className="text-3xl text-center mr-44 mt-[-50px] text-text-dark">{result && result.current.condition.text}</div>
    </div>
  );
}

export default CurrentTemperature;
