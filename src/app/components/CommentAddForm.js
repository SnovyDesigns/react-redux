import React from 'react';
import PropTypes from 'prop-types';

const CommentAddForm = props => {
  return (
    <form onSubmit={props.onAddClick}>
      <div className="form-group">
        <label htmlFor="commentInput">Dodaj komentarz:</label>
        <textarea
          className="form-control"
          id="commentInput"
          placeholder="Enter your comment.."
          value={props.value}
          onChange={props.getNewCommentValue}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-success pull-right">
          Add new comment
        </button>
      </div>
    </form>
  );
};

CommentAddForm.propTypes = {
  value: PropTypes.string.isRequired,
  onAddClick: PropTypes.func.isRequired,
  getNewCommentValue: PropTypes.func.isRequired
};

export default CommentAddForm;
