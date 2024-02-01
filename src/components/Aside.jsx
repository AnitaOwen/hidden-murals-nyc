import { Link } from "react-router-dom";

const Aside = ({ handleBoroughClick }) => {
  const boroughs = [
    'Bronx',
    'Brooklyn',
    'Manhattan',
    'Queens',
    'Staten Island'
  ]

  return (
    <aside>
      <ul>
        <li onClick={()=>handleBoroughClick("")}>
          <Link to="/murals" >All Murals</Link>
        </li>

        {boroughs.map((boro) => {
          const formattedBoro = boro.split(" ").join("").toLowerCase()
          return(
            <li key={boro} 
            onClick={()=>handleBoroughClick(boro)}>
            <Link to={`/murals/${formattedBoro}`}>{boro}</Link>
            </li>
          )})}
      </ul>
    </aside>
  )
}

export default Aside