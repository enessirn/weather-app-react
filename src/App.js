import "./App.css";
import Container from "./Container";
import { ApiProvider } from "./context/ApiContext";
import { LocationProvider } from "./context/LocationContext";
import "./index.css";
function App() {
  return (
    <div className="bg-border-light min-h-screen min-w-full flex items-center">
      <main>
        <LocationProvider>
          <ApiProvider>
            <Container />
          </ApiProvider>
        </LocationProvider>
      </main>
    </div>
  );
}

export default App;
