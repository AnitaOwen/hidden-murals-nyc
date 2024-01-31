import { Link } from "react-router-dom";

const Aside = ({ handleOnClick }) => {
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
        <li>
          <Link to="/murals">All Murals</Link>
        </li>
        {boroughs.map((boro) => {
          const formattedBoro = boro.split(' ').join("").toLowerCase()
          return(
            <li key={boro} onClick={()=>handleOnClick(boro)}>
            <Link to={`/murals/${formattedBoro}`}>{boro}</Link>
            </li>
          )})}
      </ul>
    </aside>
  )
}

export default Aside