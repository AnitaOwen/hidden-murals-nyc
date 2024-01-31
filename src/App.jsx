import { Route, Routes, useParams } from "react-router-dom";
import { useEffect } from "react";
// import Home from "./components/Home";
import MuralList from "./components/MuralList";
// import MuralInfo from "./components/MuralInfo";
// import ArtistInfo from "./components/ArtistInfo";
import Aside from "./components/Aside";
import { getAllMurals} from "./api/fetch"
import { useState } from "react";

import "./App.css"
import About from "./components/About";





function App () {
  const [allMurals, setAllMurals] = useState ([])
  const { borough } = useParams();
  const [selectedBorough, setSelectedBorough] = useState(borough)

  function handleOnClick(borough){
    setSelectedBorough(borough)
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

    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/about" element={<About />} />

    <Route path="/murals">
        <Route index element={<MuralList allMurals={allMurals} />} />
        <Route path=":id" element={<MuralList />} />
      </Route>

      {/* <Route path="/mural/:id" element={<MuralInfo allMurals={allMurals} />} /> */}

  </Routes>
  {/* <Footer /> */}
  {/* <ArtistInfo /> */}
  </>
  )
};

export default App;
