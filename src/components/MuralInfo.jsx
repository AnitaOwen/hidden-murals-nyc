import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getAllComments, createComments} from '../api/fetch';
import"./MuralInfo.css"

const MuralInfo = ({ allMurals }) => {
  const navigate = useNavigate()
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

  // handle Update button click
  function handleUpdateClick(){
    navigate(`/mural/${id}/update`)
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
          {/* <h2>Art Details</h2> */}
          <img src={mural.image} alt={mural.title} />
          <h2>
            "{mural.title}" by <span className="artist">{mural.artist}</span>
          </h2>
          <ul>
            <li><span className="key">Location:</span> {mural.location.neighborhood}, {mural.location.borough}</li>
            <li><span className="key">Intersection:</span> {mural.location.intersection}</li>
            <li><span className="key">Year:</span> {mural.year}</li>
            <li><span className="key">Description:</span> {mural.description}</li>
          </ul>

          {/* Update Form button */}
          <button onClick={handleUpdateClick}>Update mural information</button>

          {/* Comments Section */}

          <section>
            <div className="all-comments">
              <h3>Comments</h3>
              <ul>
                {matchingComments.map((comment) => (
                  <li key={comment.id}>
                    <span className="author-key">{comment.author}:</span> {comment.text}
                  </li>
                ))}
              </ul>
            </div>


            <form onSubmit={handleSubmit}>
              <label>
                <h4>Add a comment</h4>
                <input
                  placeholder="Enter Name"
                  name="author"
                  value={commentInput.author}
                  onChange={handleTextChange}
                  className="author-input"
                  required
                  />
              </label>

              <label>
                <input
                  placeholder="Enter Comment"
                  name="text"
                  value={commentInput.text}
                  onChange={handleTextChange}
                  className="comment-input"
                  required
                />
              </label>
              <div>
                <button type="submit">Submit Comment</button>
              </div>
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
