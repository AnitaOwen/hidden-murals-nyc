import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import MuralList from "./components/MuralList";
import MuralInfo from "./components/MuralInfo";
import About from "./components/About";
import { getAllMurals} from "./api/fetch"
import "./App.css"
// import DarkModeToggle from "./components/DarkModeToggle";


function App () {
  const [allMurals, setAllMurals] = useState ([])

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

      {/* <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/> */}

      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    
        {/* JAZON: this is your route for the form view. Please fill in anme of the component */}
        {/* <Route path="/new" element={<name-of-your-component />} /> */}
    
        <Route path="/murals">
            <Route index element={<MuralList allMurals={allMurals} />} />
            <Route path=":borough" element={<MuralList allMurals={allMurals} />} />
          </Route>
    
        <Route path="/mural/:id" element={<MuralInfo allMurals={allMurals} />} />
    
      </Routes>

    </>

  )
};

export default App;
