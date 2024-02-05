import React from "react";
import { useState } from "react";

// import { useNavigate } from "react-router-dom";
import { createMural } from "../api/fetch";

function MuralForm() {
  const [newMural, setNewMural] = useState({
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
  });
  //   const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    createMural(newMural)
      .then((response) => {
        console.log("SUCCESS!!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  console.log("test");

  function handleTextChange(event) {
    setNewMural({
      ...newMural,
      [event.target.id]: event.target.value,
    });
  }
  //rendering
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="artist">Artist:</label>
        </div>

        <input
          type="text"
          id="artist"
          value={newMural.artist}
          onChange={handleTextChange}
        />
        <div></div>
        <div>
          <label htmlFor="title">Title:</label>
        </div>

        <input
          type="text"
          id="title"
          name="title"
          value={newMural.title}
          onChange={handleTextChange}
        />
      </div>

      <div>
        <div>
          <label htmlFor="neighborhood">Neighborhood:</label>
        </div>
        <input
          type="text"
          id="neighborhood"
          value={newMural.location.neighborhood}
          onChange={handleTextChange}
        />
      </div>

      <div>
        <div>
          <label htmlFor="borough">Borough:</label>
        </div>
        <select
          id="borough"
          name="borough"
          value={newMural.location.borough}
          onChange={handleTextChange}
        >
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>

      <div>
        <div>
          <label htmlFor="intersection">Intersection:</label>
        </div>
        <input
          type="text"
          id="intersection"
          value={newMural.location.intersection}
          onChange={handleTextChange}
        />
      </div>

      <div>
        <div>
          <label htmlFor="year">Year:</label>
        </div>
        <input
          type="text"
          id="year"
          value={newMural.year}
          onChange={handleTextChange}
        />
      </div>

      <div>
        <div>
          <label htmlFor="description">Description:</label>
        </div>
        <input
          type="text"
          id="description"
          value={newMural.description}
          onChange={handleTextChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MuralForm;
