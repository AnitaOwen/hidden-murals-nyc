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
      <label htmlFor="title">Mural Name:</label>
      <input
        id="title"
        type="text"
        name="title"
        value={newMural.title}
        onChange={handleTextChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MuralForm;
