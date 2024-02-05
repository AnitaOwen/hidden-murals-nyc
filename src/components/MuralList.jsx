// import { useParams } from "react-router-dom";
import { useState } from "react";
import Mural from "./Mural";
import Aside from "./Aside";
import "./MuralList.css"
import { Link } from "react-router-dom";

const MuralList = ({ allMurals }) => {
  const [searchInput, setSearchInput] = useState("");

  // const { borough } = useParams();
  const [selectedBorough, setSelectedBorough] = useState("");

  // Aside component boroughs onClick
  function handleBoroughClick(boro) {
    setSelectedBorough(boro);
    setSearchInput("");
  }

    // array of all mural objects that match the selectedBorough state or all murals.
    const filteredBorough = selectedBorough ? allMurals.filter((mural) => mural.location.borough === selectedBorough) 
    : allMurals
    // console.log(filteredBorough)

  // Search bar text input
  function handleTextChange(event) {
    const input = event.target.value;
    setSearchInput(input);
  }
  
    // Filter murals based on search input
    function filteredSearchMurals(){
      return allMurals.filter((mural)=> {
        const {artist, location, title, year} = mural
        const artistMatch = artist?.toLowerCase().match(searchInput.toLowerCase())
        const neighborhoodMatch = location.neighborhood?.toLowerCase().match(searchInput.toLowerCase())
        const streetMatch = location.intersection?.toLowerCase().match(searchInput.toLowerCase())
        const titleMatch = title?.toLowerCase().match(searchInput.toLowerCase())
        const yearMatch = year.toString().match(searchInput)
        return artistMatch || neighborhoodMatch || streetMatch || titleMatch || yearMatch
    })
  }
  const searchResults = filteredSearchMurals()

  return (
    <>
      <Aside handleBoroughClick={handleBoroughClick} />
      <div className="header">
         <button className="header-buttons">
          <Link to="/mural/new">
            <p>New Post</p>
          </Link>
        </button>

        <form className="search-input">
          <label htmlFor="searchInput">Search all murals: </label>
          <input
            placeholder="enter search term"
            type="search"
            id="searchInput"
            onChange={handleTextChange}
            value={searchInput}
          />
        </form>
      </div>
      <main>
        {searchInput.length > 0
          ? searchResults.map((mural) => <Mural key={mural.id} mural={mural} />)
          : filteredBorough.map((mural) => (
              <Mural key={mural.id} mural={mural} />
            ))}
      </main>
    </>
  );
};

export default MuralList;
