import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Mural from './Mural'


const MuralInfo = ({allMurals, allComments}) => {
  //useParams
  const {id} = useParams();
  //useStates
  const [commentInput, setCommentInput] = useState({author:"", comment:""});
  const [notes, setNotes] = useState([]);
  const [mural, setMural] = useState(null)
  //useeffect
  useEffect(() => {
    const matchingMural = allMurals.find((mural) => mural.id === parseInt(id));
    setMural(matchingMural);
  }, [id, allMurals]);

  useEffect(() => {
    // Find all comments for the mural with the specified id
    const matchingComments = allComments.filter((comment) => comment.muralId === parseInt(id));
    setNotes(matchingComments);
  }, [id, allComments]);

  //Define function to handle form submission
  const handleSubmit = (event) => {
      event.preventDefault();
      // Created form inputs
      const newNote = {
        author: commentInput.author,
        comment: commentInput.comment,
      };
      //Updated note state with notes
      setNotes([...notes, newNote]);
      // Updated form inputs to reset.
      setCommentInput({ author: "", comment: "" });
    };
    // Define function to update text change
    const handleTextChange = (event) => {
      setCommentInput({ ...commentInput, [event.target.name]: event.target.value });
    };

    return (
      <div className="container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/murals">
          <h1>All Murals</h1>
        </Link>
        
        {mural ? (
          <div>
            <h1>Art Details</h1>
            <img src={mural.image} alt={mural.title} />
            <h2>
              {mural.title} by {mural.artist} 
            </h2>
            <ul>
              <li>Location: {mural.location.neighborhood}, {mural.location.borough}</li>
              <li>Between: {mural.location.intersection}</li> 
              <li>Year: {mural.year}</li>
              <h3>Description: {mural.description}</h3>
            </ul>
  
            {/* 1-on-1 Notes Section */}
            <section>
              <br />
              <h3>Comment Section</h3>
              <form onSubmit={handleSubmit}>
                <label>
                  Author:
                  <input
                    name="author"
                    value={commentInput.author}
                    onChange={handleTextChange}
                    required
                  />
                </label>
                
                <label>
                  Comment:
                  <input
                    name="comment"
                    value={commentInput.comment}
                    onChange={handleTextChange}
                    required
                  />
                </label>
                <button type="submit">Submit</button>
              </form>
              <ul>
                {notes.map((note, index) => (
                  <li key={index}>
                    <strong>{note.author}:</strong> {note.comment}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ) : (
          <p>Mural not found</p>
        )}
      </div>
    );
  };
  
  export default MuralInfo;
