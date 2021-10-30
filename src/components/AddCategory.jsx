import React from "react";
import MovieForm from "./MovieForm";
import { connect } from "react-redux";
import { handleAddNewCategory } from "../store/actions/categories";

const AddCategoryForm = (props) => {
  const addCategory = (category) => {
    category.movies = [];
    props.dispatch(handleAddNewCategory(category));
  };
  return (
    <div className="bg-white border p-3 mb-4">
      <MovieForm btnTitle="Create Category" handleSubmit={addCategory}>
        <h5 className="mb-3 text-muted">Add Category</h5>
      </MovieForm>
    </div>
  );
};

export default connect()(AddCategoryForm);
