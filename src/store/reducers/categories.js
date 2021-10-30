import {
  SET_CATEGORIES,
  ADD_NEW_CATEGORY,
  UPDATE_CATEGORY,
} from "../actions/categories";

export default function questions(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;

    case ADD_NEW_CATEGORY:
      return [...state, action.category];

    case UPDATE_CATEGORY:
      let newState = state;
      let targetIndex = state.findIndex(
        (category) => category.id === action.newCategory.id
      );
      newState[targetIndex] = action.newCategory;
      return [...newState];

    default:
      return state;
  }
}
