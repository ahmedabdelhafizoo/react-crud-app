import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieForm from "./MovieForm";
import {
  handleDeleteMovie,
  handleEditMovie,
} from "../store/actions/categories";

const MovieCard = (props) => {
  let { category, movie } = props;
  const [activeMovie, setActiveMovie] = useState(null);

  let activeEditMode = (movieId) => {
    setActiveMovie(movieId);
  };

  let deleteMovie = (category, movieId) => {
    props.dispatch(handleDeleteMovie({ category, movieId }));
  };

  let editMovie = (movie, movieId, category) => {
    movie.id = movieId;
    console.log(movie, category);
    props.dispatch(handleEditMovie({ category, movie })).then(() => {
      setActiveMovie(null);
    });
  };

  return (
    <div className="bg-white border p-2 mb-2" key={movie.id}>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <div className="col-12 col-sm-8 pl-0">
          {activeMovie === movie.id ? (
            <MovieForm
              btnTitle="Save"
              name={movie.name}
              description={movie.description}
              handleSubmit={(editedMovie) =>
                editMovie(editedMovie, movie.id, category)
              }
            ></MovieForm>
          ) : (
            <div>
              <h6>{movie.name}</h6>
              <p className="m-0">{movie.description}</p>
            </div>
          )}
        </div>
        <div className="list__actions mt-2 mt-md-0">
          {activeMovie !== movie.id ? (
            <button
              className="btn btn-warning px-4 me-2"
              onClick={() => activeEditMode(movie.id)}
            >
              Edit
            </button>
          ) : (
            <button
              className="btn btn-warning px-4 me-2"
              onClick={() => setActiveMovie(null)}
            >
              Cancel
            </button>
          )}
          <button
            className="btn btn-danger px-4"
            onClick={() => deleteMovie(category, movie.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// validate props
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
};

export default connect()(MovieCard);
