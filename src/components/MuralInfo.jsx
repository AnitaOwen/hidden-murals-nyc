import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import"./MuralInfo.css"
import { getAllComments, createComments, destroyMural } from '../api/fetch';


const MuralInfo = ({ allMurals, getRemainingMurals }) => {
  const navigate = useNavigate()
  //USEPARAMS
  const { id } = useParams();
  //USESTATES
  const [mural, setMural] = useState(null)
  const [allComments, setAllComments] = useState([])
  const [commentInput, setCommentInput] = useState({ author: "", text: "" });
  // const [notes, setNotes] = useState([])

  //useeffect to find mural
  useEffect(() => {
    const matchingMural = allMurals.find((mural) => mural.id === parseInt(id));
    setMural(matchingMural);
  }, [id, allMurals]);

  // USEEFFECT TO FIND COMMENTS
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

  // MURAL DELETE FUNCTION
  const handleDelete = () => {
    destroyMural(mural.id)
      .then(() => {
        // Update the allMurals state to remove the deleted mural
        getRemainingMurals(mural.id)
        alert("Mural deleted successfully")
        navigate("/murals")
      })
      .catch((error) => {
        console.error("Error deleting mural", error);
        alert("Failed to delete mural. Please try again.");
      })
  };

  // COMMENT DELETE FUNCTION
  // const handleCommentDelete = (commentId) => {
  //   destroyComment(commentId)
  //     .then(() => {
  //       console.log("Comment deleted successfully");
  //       const updatedComments = allComments.filter(comment => comment.id !== commentId);
  //       setAllComments(updatedComments);
  //     })
  //     .catch((error) => console.error(error));
  // };


  return (
    <div className="info-parent-container">
      <div className="go-back">
        <Link to="/murals">
          {`<<< Go Back`}
        </Link>
      </div>
      {/* <div>
      <Link to="/">
          <h1>Hidden Murals</h1>
        </Link>
      </div> */}
      <div className="two-columns">
        {mural ? (
            <div classname="info-container">
              <img src={mural.image} alt={mural.title} className="mural-image"/>
              <h2>
                "{mural.title}" by <span className="artist">{mural.artist}</span>
              </h2>
              <ul>
                <li className="list-item"><span className="key">Location:</span> {mural.location.neighborhood}, {mural.location.borough}</li>
                <li className="list-item"><span className="key">Intersection:</span> {mural.location.intersection}</li>
                <li className="list-item"><span className="key">Year:</span> {mural.year}</li>
                <li className="list-item"><span className="key">Description:</span> {mural.description}</li>
              </ul>
        


              {/* Update Form button */}
              <button onClick={handleUpdateClick}>Edit Mural Details</button>
              {/* Delete button */}
              <button onClick={handleDelete}>Delete Mural</button>
          </div> 
          ) : (
            <p>Mural not found</p>
          )}


          {/* Comments Section */}
          <section>
            {mural && (
              <div className="all-comments">
                <h3>Comments</h3>
                <ul>
                  {matchingComments.map((comment) => (
                    <li key={comment.id} className="list-item comments">
                      <span className="author-key">{comment.author}:</span> {comment.text}
                      {/* <button onClick={() => handleCommentDelete(comment.id)}>Delete</button> */}
                    </li>
                  ))}
                </ul>
              </div>
            )}


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
    </div>

  );
};

export default MuralInfo;
