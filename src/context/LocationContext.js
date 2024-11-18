import React, { createContext, useState, useEffect } from "react";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoaded(true)
        },
        (err) => {
          setError(err.message);
          setLoaded(false)
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
      setLoaded(false)
    }
  }, [loaded]);

  return (
    <LocationContext.Provider value={{ location, error, loaded, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationContext;
