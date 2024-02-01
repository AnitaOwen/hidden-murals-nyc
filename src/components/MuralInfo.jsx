import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Mural from './Mural'


const MuralInfo = ({allMurals}) => {
  //useParams
  const {id} = useParams();
  //useStates
  const [mural, setMural] = useState(null)
  //useeffect
  useEffect(() => {
    const matchingMural = allMurals.find((mural) => mural.id === parseInt(id));
    setMural(matchingMural);
  }, [id, allMurals]);


  return (
    <div className="container">
      {mural ? (
        <>
          <div>
            <h1>Art Details</h1>
            <img src={mural.image} alt={mural.title} />
            <h2>
            {mural.title} by {mural.artist} 
            </h2>
            <ul>
              <li>Location: {mural.location.neighborhood}, {mural.location.borough}</li>
              <li>Between: {mural.location.intersection}</li> 
              <li>Year: {mural.year}</li>
              <h3>Description: {mural.description}</h3>
            </ul>
          </div>
        </>
      ) : (
        <p>Mural not found hello</p>
      )}
    </div>
  );
};

export default MuralInfo;
