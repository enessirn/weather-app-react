import React, { createContext,useState,useEffect } from "react";
const LocationContext = createContext();

export function LocationProvider({ children }) {

    const[location,setLocation] = useState({latitude: null, longitude: null});
    const[error,setError] = useState(null);
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
  
            })
          },
          (err) => {
            setError(err.message)
          } 
        )
      }
      else {
        setError("Geolocation is not supported by this browser")
      }
    },[])





    return <LocationContext.Provider value={{location,error}}>{children}</LocationContext.Provider>
}

export default LocationContext;
