import React from "react";
import { connect } from "react-redux";
import AddCategoryForm from "../components/AddCategory";
import MoviesList from "../components/MoviesList";

const Movies = (props) => {
  return (
    <div className="container py-3">
      <AddCategoryForm />
      <MoviesList categories={props.categories} />
    </div>
  );
};

function mapStateToProps({ categories }) {
  return {
    categories,
  };
}

export default connect(mapStateToProps)(Movies);
