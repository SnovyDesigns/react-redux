import React from 'react';

const CommentForm = ({ commentValue: value, addFormChange, addComment }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addComment(value);
      }}
    >
      <div className="form-group">
        <label htmlFor="commentInput">Dodaj komentarz:</label>
        <textarea
          className="form-control"
          id="commentInput"
          placeholder="Enter your comment.."
          value={value}
          onChange={event => addFormChange(event.currentTarget.value)}
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

export default CommentForm;
