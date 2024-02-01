import React from 'react'
import Mural from './Mural'

const MuralList = ({allMurals, matchingBorough}) => {
  
  return (
    <main>
      {matchingBorough
      ? matchingBorough.map((mural) => (
        <Mural key={mural.id} mural={mural}/>
      )) : allMurals.map((mural) => (
       <Mural key={mural.id} mural={mural}/>
      ))}
    </main>
  )
}

export default MuralList