import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import MuralList from "./components/MuralList";
import MuralInfo from "./components/MuralInfo";
import MuralForm from "./components/MuralForm";
import About from "./components/About";
import { getAllMurals } from "./api/fetch";

import "./App.css";

function App() {
  const [allMurals, setAllMurals] = useState([]);

  // const [isDarkMode, setIsDarkMode] = useState(false)

  // function toggleDarkMode(){
  //   setIsDarkMode(!isDarkMode)
  // }

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
    // <div className={isDarkMode ? "dark-mode" : "light-mode"}>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* JAZON: this is your route for the form view. Please fill in name of the component */}
        <Route path="mural/new" element={<MuralForm />} />
        <Route path="/murals">
          <Route index element={<MuralList allMurals={allMurals} />} />
          <Route
            path=":borough"
            element={<MuralList allMurals={allMurals} />}
          />
        </Route>

        <Route
          path="/mural/:id"
          element={<MuralInfo allMurals={allMurals} />}
        />
      </Routes>
    </>
  );
}

export default App;
