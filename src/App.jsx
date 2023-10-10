import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomNumber } from "./utils/random";
import { Locations } from "./components/Locations";
import { ResidentList } from "./components/ResidentList";

function App() {
  const [location, setlocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setlocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className=" px-4 min-h-screen bg-black text-white">
      <Locations location={location} setLocation={setlocation} />
      <ResidentList residents={location?.residents ?? []} />
    </main>
  );
}

export default App;
