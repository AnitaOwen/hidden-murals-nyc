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
            <h2>Details</h2>
            <ul>
              <li>Artist: {mural.artist}</li>
            </ul>
          </div>
        </>
      ) : (
        <p>Mural not found</p>
      )}
    </div>
  );
};

export default MuralInfo;
