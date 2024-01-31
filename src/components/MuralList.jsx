import React from 'react'
import Mural from './Mural'

const MuralList = ({allMurals}) => {
  return (
    <main>
      {allMurals.map((mural) => (
       <Mural key={mural.id} mural={mural}/>
      ))}
    </main>
  )
}

export default MuralList