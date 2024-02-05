import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { editMural, getOneMural } from "../api/fetch";
import { Link } from "react-router-dom";
import "./UpdateForm.css"
const UpdateForm = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const [updateMural, setUpdateMural] = useState({
    image: "",
    artist: "",
    location: {
      neighborhood: "",
      borough: "",
      intersection: "",
    },
    title: "",
    year: "",
    description: "",
  })

  function handleTextChange(event) {
    setUpdateMural({
      ...updateMural,
      [event.target.id]: event.target.value,
    });
  }

  function handleUpdateSubmit(event) {
    event.preventDefault();
    editMural(id, updateMural)
      .then(() => {
        navigate(`/mural/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getOneMural(id)
      .then((response) => {
        setUpdateMural(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <form onSubmit={handleUpdateSubmit}>
      <Link to={`/mural/${id}`}>
            <p>Go Back</p>
          </Link>
        <img src={updateMural.image} alt="Hidden Mural" />
        <div className="label-input">
          <div>
            <label htmlFor="artist">Artist:</label>
          </div>
          <input
            type="text"
            id="artist"
            onChange={handleTextChange}
          />
        </div>

        <div className="label-input">
          <div>
            <label htmlFor="title">Title:</label>
          </div>
          <input
            type="text"
            id="title"
            value={updateMural.title}
            onChange={handleTextChange}
          />
        </div>

        <div className="label-input">
          <div>
            <label htmlFor="neighborhood">Neighborhood:</label>
          </div>
          <input
            type="text"
            id="neighborhood"
            value={updateMural.location.neighborhood}
            onChange={handleTextChange}
          />
        </div>

        <div className="label-input">
          <div>
            <label htmlFor="borough">Borough:</label>
          </div>
          <select
            id="borough"
            name="borough"
            value={updateMural.borough}
            onChange={handleTextChange}
          >
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>

        <div className="label-input">
          <div>
            <label htmlFor="intersection">Intersection:</label>
          </div>
          <input
            type="text"
            id="intersection"
            value={updateMural.location.intersection}
            onChange={handleTextChange}
          />
        </div>

        <div className="label-input">
          <div>
            <label htmlFor="year">Year:</label>
          </div>
          <input
            type="text"
            id="year"
            value={updateMural.year}
            onChange={handleTextChange}
          />
        </div>

        <div className="label-input">
          <div>
            <label htmlFor="description">Description:</label>
          </div>
          <input
            type="text"
            id="description"
            value={updateMural.description}
            onChange={handleTextChange}
            className="description-input" />
        </div>

        <button>Submit Changes</button>
      </form>
    </>
  )
}

export default UpdateForm