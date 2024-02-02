import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import MuralList from "./components/MuralList";
import MuralInfo from "./components/MuralInfo";
import UpdateForm from "./components/UpdateForm";

import About from "./components/About";
import { getAllComments, getAllMurals} from "./api/fetch"

import "./App.css"


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
  
  useEffect(() => {
    getAllComments()
      .then((data) => {
        console.log(data);
        setAllComments(data);
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
    
        {/* JAZON: this is your route for the form view. Please fill in anme of the component */}
        {/* <Route path="mural/new" element={<name-of-your-component />} /> */}

        <Route path="/mural/update" element={<UpdateForm />} />

        <Route path="/murals">
            <Route index element={<MuralList allMurals={allMurals} />} />
            <Route path=":borough" element={<MuralList allMurals={allMurals} />} />
          </Route>
    
        <Route path="/mural/:id" element={<MuralInfo allMurals={allMurals} allComments={allComments}/>} />
    
      </Routes>

    </>


  )
};

export default App;
