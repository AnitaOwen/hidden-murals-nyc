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

  function getRemainingMurals(muralId){
    const remainingMurals = allMurals.filter((singleMural) => singleMural.id !== muralId)
    setAllMurals(remainingMurals)
  }

  function getNewList(response){
    setAllMurals([...allMurals, response ])
  }

  return (
    // <div className={isDarkMode ? "dark-mode" : "light-mode"}>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    
        <Route path="mural/new" element={<MuralForm getNewList={getNewList} />} />
          

        <Route path="/murals">
            <Route index element={<MuralList allMurals={allMurals} />} />
            <Route path=":borough" element={<MuralList allMurals={allMurals} />} />
          </Route>
    
        
        {/* <Route path="/mural/:id" element={<MuralInfo allMurals={allMurals} allComments={allComments}/>} />
        <Route path="/mural/:id/update" element={<UpdateForm />} /> */}

        <Route path="/mural/:id">
          <Route index element={<MuralInfo getRemainingMurals={getRemainingMurals} allMurals={allMurals} allComments={allComments} />} />
          <Route path="update" element={<UpdateForm />} />
        </Route>
    
      </Routes>
    </>
  );
}

export default App;
