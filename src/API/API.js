import axios from "./axios";

export function _getCategories() {
  return axios.get("categories");
}

export function _addNewCategory(category) {
  return axios.post("categories", category);
}

export function _addNewMovie(payload) {
  let newCategory = payload.category;
  let newMovie = payload.movie;
  newMovie.id = Date.now();
  newCategory.movies.push(newMovie);
  return axios.put(`categories/${payload.category.id}`, newCategory);
}

export function _deleteMovie(payload) {
  let newCategory = payload.category;
  let movieIndex = newCategory.movies.findIndex(
    (movie) => movie.id === payload.movieId
  );
  newCategory.movies.splice(movieIndex, 1);
  return axios.put(`categories/${payload.category.id}`, newCategory);
}

export function _editMovie(payload) {
  let newCategory = payload.category;
  let movieIndex = newCategory.movies.findIndex(
    (movie) => movie.id === payload.movie.id
  );
  newCategory.movies.splice(movieIndex, 1, payload.movie);
  return axios.put(`categories/${payload.category.id}`, newCategory);
}
