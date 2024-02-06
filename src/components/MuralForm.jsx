import React from "react";
import { useState } from "react";
import UploadWidget from "./UploadWidget";

import { Link, useNavigate } from "react-router-dom";
import { createMural } from "../api/fetch";

function MuralForm() {
  const navigate = useNavigate();

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

  function setImageURL(uploadedURL){
    setNewMural({
      ...newMural,
      image: uploadedURL
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!newMural.image) {
      // Display an alert to the user if the image is not provided
      window.alert("Please upload an image before submitting the form.")
    } else {
      createMural(newMural)
        .then((response) => {
          navigate("/murals")
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }

  function formatInputValue(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  function handleTextChange(event) {
    const inputId = event.target.id;
    //checking for location
    if (inputId.includes("location")) {
      // splits "location.borough" and such into just borough
      //   const newKey = inputId.split(".")[1];
      const newKey = inputId.replace("location.", "");
      // ex. location.intersection -> intersection
      //updates newMural object
      setNewMural({
        ...newMural,
        //replaces location key with specific borough, neighborhood, or intersection based on user input
        location: {
          ...newMural.location,
          [newKey]: event.target.value,
        },
      });
    } else {
      setNewMural({
        ...newMural,
        [inputId]: event.target.value,
      });
    }
  }

  //rendering
  return (
    <>
      <div className="go-back">
        <Link to="/murals">
          {`<<< Go Back`}
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        
        <UploadWidget setImageURL={setImageURL}/>

        {/* Display a message if an image is present */}
        {newMural.image && (
          <div className="image-indicator">
            Image added successfully!
          </div>
        )}
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
            id="location.neighborhood"
            value={newMural.location.neighborhood}
            required
            onChange={handleTextChange}
          />
        </div>

        <div>
          <div>
            <label htmlFor="borough">Borough:</label>
          </div>
          <select
            id="location.borough"
            name="borough"
            value={newMural.location.borough}
            required
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
            id="location.intersection"
            value={newMural.location.intersection}
            required
            onChange={handleTextChange}
          />
        </div>

        <div>
          <div>
            <label htmlFor="year">Year:</label>
          </div>
          <input
            type="number"
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
            required
            onChange={handleTextChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MuralForm;
