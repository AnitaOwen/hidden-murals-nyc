import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getAllComments } from '../api/fetch';


const MuralInfo = ({ allMurals }) => {
  //useParams
  const { id } = useParams();
  //useStates
  const [commentInput, setCommentInput] = useState({ author: "", comment: "" });
  const [mural, setMural] = useState(null)
  const [allComments, setAllComments] = useState([])
  const [notes, setNotes] = useState([])
  //useeffect to find mural
  useEffect(() => {
    const matchingMural = allMurals.find((mural) => mural.id === parseInt(id));
    setMural(matchingMural);
  }, [id, allMurals]);
  // useeffect to find comments
  useEffect(() => {
    getAllComments()
      .then((data) => {
        console.log(data);
        setAllComments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  const matchingComments = allComments.filter((comment) => comment.muralId === parseInt(id));
  

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
            <li> <span>Location:</span> {mural.location.neighborhood}, {mural.location.borough}</li>
            <li> <span>Between:</span> {mural.location.intersection}</li>
            <li> <span>Year:</span> {mural.year}</li>
            <h3>Description: {mural.description}</h3>
          </ul>

          {/* 1-on-1 Notes Section */}

          <section>
            <br />
            <h3>Comment Section</h3>
            <ul>
              {matchingComments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.author}:</strong> {comment.text}
                  <p>{comment.text}</p>
                </li>
              ))}
            </ul>


            <form onSubmit={handleSubmit}>
              <label>
                <h3>
                  Author:
                </h3>
                <input
                  name="author"
                  value={commentInput.author}
                  onChange={handleTextChange}
                  required
                />
              </label>

              <label>
                <h3>
                  Comment:
                </h3>
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
