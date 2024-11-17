import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import LocationContext from "./LocationContext";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [result, setResult] = useState(null);
  const { location, loaded } = useContext(LocationContext);
  const [query, setQuery] = useState(null);
useEffect(() => {
    if (loaded) {
      setQuery(`${location.latitude},${location.longitude}`);
    } else {
      setQuery("istanbul turkey");
    }
  }, [location, loaded]);

  useEffect(() => {
    const getApi = async () => {
      try {
        if (query) {
          
          const getResult = await axios.get(
            `${process.env.REACT_APP_WEATHER_API_URL}${process.env.REACT_APP_WEATHER_API_KEY}&q=${query}&days=5&aqi=no&alerts=no`
          );

          setResult(getResult.data);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    getApi();
  }, [location,query]);

  useEffect(() => {
    if (loaded) {
      console.log(result);
    }
  }, [loaded,result]);

  return <ApiContext.Provider value={{result, setQuery}}>{children}</ApiContext.Provider>;
}

export default ApiContext;
