import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import MuralList from "./components/MuralList";
import MuralInfo from "./components/MuralInfo";

import MuralForm from "./components/MuralForm";
import About from "./components/About";
import UpdateForm from "./components/UpdateForm";
import { getAllComments, getAllMurals} from "./api/fetch"
import "./App.css";

function App () {
  const [allMurals, setAllMurals] = useState ([])
  const [allComments, setAllComments] = useState([])


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
    
        <Route path="mural/new" element={<MuralForm />} />
          
        <Route path="/mural/update" element={<UpdateForm />} />

        <Route path="/murals">
            <Route index element={<MuralList allMurals={allMurals} />} />
            <Route path=":borough" element={<MuralList allMurals={allMurals} />} />
          </Route>
    
        <Route path="/mural/:id" element={<MuralInfo allMurals={allMurals} allComments={allComments}/>} />
    
      </Routes>
    </>
  );
}

export default App;
