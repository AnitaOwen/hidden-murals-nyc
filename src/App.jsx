import { useEffect } from "react";
// import Home from "./components/Home";
import MuralList from "./components/MuralList";
// import MuralInfo from "./components/MuralInfo";
// import ArtistInfo from "./components/ArtistInfo";
// import Aside from "./components/Aside";
import { getAllMurals} from "./api/fetch"
import { useState } from "react";
import { Route, Routes } from "react-router-dom";


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
  return (
  <>
  <Routes>
    {/* <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} /> */}

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
