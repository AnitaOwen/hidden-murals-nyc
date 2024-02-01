import { useParams } from "react-router-dom";
import { useState } from "react";
import Mural from './Mural'
import Aside from "./Aside";

const MuralList = ({allMurals}) => {
  const [searchInput, setSearchInput] = useState("")

  const { borough } = useParams();
  const [selectedBorough, setSelectedBorough] = useState(borough || "")
  
  // Aside component boroughs onClick
  function handleBoroughClick(boro){
    setSelectedBorough(boro)
  }

    // array of all mural objects that match the selectedBorough state or all murals.
    const filteredBorough = selectedBorough ? allMurals.filter((mural) => mural.location.borough === selectedBorough) : allMurals
    // console.log(filteredBorough)

    // Search bar text input
    function handleTextChange(event){
      const input = event.target.value
      setSearchInput(input)
    }

    // Filter murals based on search input
    function filteredSearchMurals(){
      return allMurals.filter((mural)=> {
        const {artist, location, title, year} = mural
        const artistMatch = artist.toLowerCase().match(searchInput.toLowerCase())
        const neighborhoodMatch = location.neighborhood.toLowerCase().match(searchInput.toLowerCase())
        const streetMatch = location.intersection.toLowerCase().match(searchInput.toLowerCase())
        const titleMatch = title.toLowerCase().match(searchInput.toLowerCase())
        const yearMatch = year.toString().match(searchInput)
        return artistMatch || neighborhoodMatch || streetMatch || titleMatch || yearMatch
    })
  }
  const searchResults = filteredSearchMurals()
    
  return (
    <>
      <Aside handleBoroughClick={handleBoroughClick} />
      <div>
        <form>
            <label htmlFor="searchInput">Search by artist, title, location, or year:</label>
            {/* <div> */}
                <input 
                placeholder="search"
                type="search"
                id="searchInput"
                onChange={handleTextChange}
                value={searchInput} 
                />
          {/* </div> */}
        </form>
    </div>
      <main>
        {searchResults.length > 0 
          ? searchResults.map((mural) => (
          <Mural key={mural.id} mural={mural}/>
          ))
          : filteredBorough.map((mural) => (
          <Mural key={mural.id} mural={mural}/>
        ))}
      </main>
    </>
  )
}

export default MuralList