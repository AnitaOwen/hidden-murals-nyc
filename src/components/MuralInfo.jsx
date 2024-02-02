import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getAllComments, createComments} from '../api/fetch';


const MuralInfo = ({ allMurals }) => {
  //USEPARAMS
  const { id } = useParams();
  //USESTATES
  const [mural, setMural] = useState(null)
  const [allComments, setAllComments] = useState([])
  const [commentInput, setCommentInput] = useState({ author: "", text: ""});
  // const [notes, setNotes] = useState([])
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
  
  
  // HANDLE FORM SUBMIT
  function handleSubmit(event) {
    event.preventDefault();
    // PREPARE THE COMMENT DATA
    createComments({ ...commentInput, muralId: parseInt(id) })
      .then((response) => {
        // Handle success if needed
        console.log("Comment submitted successfully", response);
        // Update the state or perform other actions as needed
        setAllComments([...allComments, response]);
        setCommentInput({ author: "", text: "" });
      })
      .catch((error) => console.error(error));
  };
function handleTextChange(event) {
  setCommentInput({
    ...commentInput,
    [event.target.name]: event.target.value,
  });
}
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

          {/* Comments Section */}

          <section>
            <br />
            <h3>Comment Section</h3>
            <ul>
              {matchingComments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.author}:</strong> {comment.text}
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
                  name="text"
                  value={commentInput.text}
                  onChange={handleTextChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </section>
        </div>
      ) : (
        <p>Mural not found</p>
      )}
    </div>
  );
};

export default MuralInfo;
