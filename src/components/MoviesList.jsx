import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MovieForm from "./MovieForm";
import { connect } from "react-redux";
import { initData, handleAddNewMovie } from "../store/actions/categories";
import MovieCard from "./MovieCard";

const MoviesList = (props) => {
  useEffect(() => {
    props.dispatch(initData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let addMovie = (movie, category) => {
    props.dispatch(handleAddNewMovie({ movie, category }));
  };

  let expandCard = (e) => {
    e.preventDefault();
    let openedCategory = document.querySelector(".list__header.open");
    if (openedCategory && openedCategory !== e.currentTarget) {
      openedCategory.classList.remove("open");
      openedCategory.nextElementSibling.classList.add("d-none");
    }
    let targetElement = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.toggle("open");
    if (e.currentTarget.classList.contains("open")) {
      targetElement.classList.remove("d-none");
    } else {
      targetElement.classList.add("d-none");
    }
  };

  return (
    <div className="movies-list bg-white border p-3">
      <h3>Movie Data</h3>
      {props.categories.length ? (
        props.categories.map((category) => (
          <div className="list mt-3" key={category.id}>
            <a
              onClick={(e) => expandCard(e)}
              href="##"
              className="list__header bg-success bg-opacity-75 text-white text-decoration-none d-block px-3 py-2 d-flex align-items-center justify-content-between"
            >
              <h6 className="m-0 py-1">{category.name}</h6>
              <h4 className="m-0 py-1 icon">+</h4>
            </a>
            <div className="list__body bg-success bg-opacity-25 p-2 d-none">
              {category.description && (
                <p className="d-flex">
                  <strong className="me-2">Description: </strong>
                  {category.description}
                </p>
              )}
              <div className="mb-3">
                <MovieForm handleSubmit={(movie) => addMovie(movie, category)}>
                  <h6 className="mb-3">Movies</h6>
                </MovieForm>
              </div>
              {category.movies.length ? (
                category.movies.map((movie) => (
                  <MovieCard movie={movie} category={category} key={movie.id} />
                ))
              ) : (
                <h6 className="my-3">This Category doesn't has any move !</h6>
              )}
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-muted mt-5">No categories Founded!</h5>
      )}
    </div>
  );
};

// validate props
MoviesList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default connect()(MoviesList);
