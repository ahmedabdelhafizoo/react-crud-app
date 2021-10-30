import React from "react";
import PropTypes from "prop-types";

class MovieForm extends React.Component {
  state = {
    formData: {
      name: this.props.name ? this.props.name : "",
      description: this.props.description ? this.props.description : "",
    },
    errorFeedback: null,
  };
  handleUpdate = (e) => {
    let formData = this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ errorFeedback: null });
    if (this.state.formData.name) {
      this.props.handleSubmit({ ...this.state.formData });
      // clear form
      this.setState({ formData: { name: "", description: "" } });
    } else {
      this.setState({ errorFeedback: true });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {this.props.children && this.props.children}
        <div className="d-flex align-items-start">
          <input
            onChange={(e) => this.handleUpdate(e)}
            value={this.state.formData.name}
            name="name"
            type="text"
            className="form-control col me-2"
            placeholder="Name *"
          />
          <textarea
            onChange={(e) => this.handleUpdate(e)}
            value={this.state.formData.description}
            name="description"
            className="form-control col me-2"
            placeholder="Description"
            rows="1"
          ></textarea>
          <button className="btn btn-success">
            {this.props.btnTitle ? this.props.btnTitle : "Create"}
          </button>
        </div>
        {this.state.errorFeedback && (
          <small className="text-danger d-block mt-2">
            The Name Field Is Required !
          </small>
        )}
      </form>
    );
  }
}

// validate props
MovieForm.propTypes = {
  btnTitle: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
