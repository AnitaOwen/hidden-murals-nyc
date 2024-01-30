import React, { useEffect } from "react";
// import Home from "./components/Home";
import MuralList from "./components/MuralList";
// import MuralInfo from "./components/MuralInfo";
// import ArtistInfo from "./components/ArtistInfo";
// import Aside from "./components/Aside";
import { getAllMurals} from "./api/fetch"
import { useState } from "react";


function App () {
  const [allMurals, setAllMurals] = useState ([])

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
  return 
  <>
  {/* <Home /> */}
  <MuralList allMurals={allMurals} />
  {/* <MuralInfo/> */}
  {/* <ArtistInfo /> */}
  {/* <Aside/> */}
  {/* <Footer /> */}
  </>
};

export default App;
