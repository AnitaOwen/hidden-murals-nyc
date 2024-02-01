import { useParams } from "react-router-dom";
import { useState } from "react";
import Mural from './Mural'
import Aside from "./Aside";

const MuralList = ({allMurals}) => {
  const { borough } = useParams();
  const [selectedBorough, setSelectedBorough] = useState(borough || "")

  function handleBoroughClick(boro){
    setSelectedBorough(boro)
  }

    // array of all mural objects that match the selectedBorough state or all murals.
    const filteredBorough = selectedBorough ? allMurals.filter((mural) => mural.location.borough === selectedBorough) : allMurals
    // console.log(filteredBorough)
    
  return (
    <>
      <Aside handleBoroughClick={handleBoroughClick} />
      <main>
        {filteredBorough.map((mural) => (
          <Mural key={mural.id} mural={mural}/>
        ))}
      </main>
    </>
  )
}

export default MuralList