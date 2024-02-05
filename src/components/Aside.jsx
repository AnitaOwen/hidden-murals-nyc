import { Link } from "react-router-dom";
import "./Aside.css"

const Aside = ({ handleBoroughClick, allMurals }) => {
  const boroughs = [
    'Bronx',
    'Brooklyn',
    'Manhattan',
    'Queens',
    'Staten Island'
  ]

  return (
    <div className="sidenav">
      <Link to="/">
      <h3 className="sidenav-logo">Hidden Murals</h3>
      </Link>
      <div className="sidenav-buttons">
        <ul>

          <li>
            <div onClick={() => handleBoroughClick("")}>
              <Link to="/murals" >All Murals</Link>
            </div>
          </li>
          {boroughs.map((boro) => {
            const formattedBoro = boro.split(" ").join("").toLowerCase()
            return (
              <li key={boro}
              className="sidenav-buttons" onClick={() => handleBoroughClick(boro)}>
                <Link to={`/murals/${formattedBoro}`}>{boro}  </Link>
              </li>
            )
          })}
        <li className="sidenav-buttons" >
        </li>

        </ul>


      </div>
    </div>

  )
}

export default Aside