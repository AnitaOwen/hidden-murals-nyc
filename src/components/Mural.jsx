
import { Link } from 'react-router-dom'

const Mural = ({mural}) => {
  return (
    <div className='mural'>
        <Link to={`/mural/${mural.id}`}>
          <img src={mural.image} alt={mural.title} />
          <h2>
            "{mural.title}" by {mural.artist} 
          </h2>
        </Link>
    </div>
  )
}

export default Mural