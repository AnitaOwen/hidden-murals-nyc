import React from 'react'
import Mural from './Mural'

const MuralList = ({allMurals}) => {
  return (
    <div>Mural List
      {allMurals.map((mural) => (
       <Mural key={mural.id} mural={mural}/>
      ))}
    </div>
  )
}

export default MuralList