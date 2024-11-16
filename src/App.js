// import { useEffect,useState } from "react";
import "./App.css"
import Container from "./Container";
import {LocationProvider} from "./context/LocationContext";
import "./index.css"
function App() {

  return (
    <div className="bg-border-light min-h-screen min-w-full flex items-center">
      <LocationProvider>
        <Container />
      </LocationProvider>
    </div>
  );
}

export default App;
