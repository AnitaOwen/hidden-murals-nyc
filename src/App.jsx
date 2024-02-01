import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import MuralList from "./components/MuralList";
import MuralInfo from "./components/MuralInfo";
// import ArtistInfo from "./components/ArtistInfo";
import Aside from "./components/Aside";
import { getAllMurals} from "./api/fetch"

import "./App.css"
import About from "./components/About";


function App () {
  const [allMurals, setAllMurals] = useState ([])
  const { borough } = useParams();
  const [selectedBorough, setSelectedBorough] = useState(borough)

    // array of all mural objects that match the selectedBorough state.
    const matchingBorough = allMurals.filter((mural) => {
      return mural.location.borough === selectedBorough;
    });
    // console.log(matchingBorough)

  function handleOnClick(boro){
    setSelectedBorough(boro)
  }

  useEffect(() => {
    getAllMurals()
      .then((data) => {
        console.log(data);
        setAllMurals(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
  <>
  <Aside allMurals={allMurals} handleOnClick={handleOnClick} />

  <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />

    <Route path="/murals">
        <Route index element={<MuralList allMurals={allMurals} />} />
        <Route path=":borough" element={<MuralList allMurals={matchingBorough}/>} />
      </Route>

      <Route path="/mural/:id" element={<MuralInfo allMurals={allMurals} />} />

  </Routes>
  {/* <Footer /> */}
  {/* <ArtistInfo /> */}
  </>
  )
};

export default App;
