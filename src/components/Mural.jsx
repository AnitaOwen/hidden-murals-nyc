import React from 'react'
import { Link } from 'react-router-dom'

const Mural = ({mural}) => {
  return (
    <div>
        {/* clickable link to student info */}
        <Link to={`/mural/${mural.id}`}>
          <img src={mural.image} alt={mural.title} />
          <h2 className="user-info">
            {mural.title} by {mural.artist} 
          </h2>
        </Link>
    </div>
  )
}

export default Mural