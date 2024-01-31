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
      {boroughs.map((borough) => (
        <li key={borough} onClick={()=>handleOnClick(borough.toLowerCase())}>
        <Link to={`/murals/${borough.toLowerCase()}`}>{borough}</Link>
        </li>
      ))}
    </aside>
  )
}

export default Aside