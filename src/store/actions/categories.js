import {
  _getCategories,
  _addNewCategory,
  _addNewMovie,
  _deleteMovie,
  _editMovie,
} from "../../API/API";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const ADD_NEW_CATEGORY = "ADD_NEW_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories,
  };
}

export function addNewCategory(category) {
  return {
    type: ADD_NEW_CATEGORY,
    category,
  };
}

export function updateCategory(newCategory) {
  return {
    type: UPDATE_CATEGORY,
    newCategory,
  };
}

export function initData() {
  return (dispatch) => {
    _getCategories()
      .then((res) => {
        dispatch(setCategories(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
}

export function handleAddNewCategory(category) {
  return (dispatch) => {
    _addNewCategory(category)
      .then((res) => {
        dispatch(addNewCategory(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
}

export function handleAddNewMovie(payload) {
  return (dispatch) => {
    _addNewMovie(payload)
      .then((res) => {
        dispatch(updateCategory(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
}

export function handleDeleteMovie(payload) {
  return (dispatch) => {
    _deleteMovie(payload)
      .then((res) => {
        dispatch(updateCategory(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
}

export function handleEditMovie(payload) {
  return (dispatch) => {
    return new Promise((resolve) => {
      _editMovie(payload)
        .then((res) => {
          dispatch(updateCategory(res.data));
          resolve();
        })
        .catch((err) => {
          alert(err);
        });
    });
  };
}
