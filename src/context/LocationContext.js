import React, { createContext, useState, useEffect } from "react";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  }, [loaded]);

  useEffect(() => {
    if (location.latitude !== null && location.longitude !== null) {
      setLoaded(true);
    }
  }, [location]);

  return (
    <LocationContext.Provider value={{ location, error, loaded, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationContext;
