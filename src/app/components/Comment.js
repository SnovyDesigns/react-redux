import React from 'react';
import { getDate } from '../helpers';

const Comment = ({
  id,
  text,
  thumbUpVotes,
  thumbDownVotes,
  editEnabled,
  edditedText: value,
  removeComment,
  editFormShow,
  editFormChange,
  editComment,
  thumbUpComment,
  thumbDownComment
}) => {
  return (
    <li className="list-group-item">
      <small className="mb-2">Commented: {getDate()}</small>
      <small className="mb-2">
        <i className="far fa-thumbs-up" /> {thumbUpVotes} |{' '}
        <i className="far fa-thumbs-down" /> {thumbDownVotes}
      </small>
      <p>{text}</p>
      <small className="mt-2 mb-2">
        <a
          href="/"
          onClick={event => {
            event.preventDefault();
            editFormShow(id);
          }}
        >
          EDIT
        </a>{' '}
        |{' '}
        <a
          href="/"
          onClick={event => {
            event.preventDefault();
            removeComment(id);
          }}
        >
          REMOVE
        </a>
      </small>
      {editEnabled ? (
        <form
          onSubmit={event => {
            event.preventDefault();
            editComment(id);
          }}
        >
          <div className="form-group">
            <textarea
              className="form-control"
              name="commentEdit"
              placeholder="Type new text..."
              value={value}
              onChange={event => editFormChange(id, event.currentTarget.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : null}
      <div className="text-right social">
        <i
          className="fas fa-thumbs-up mr-4"
          onClick={() => thumbUpComment(id)}
        />
        <i
          className="fas fa-thumbs-down"
          onClick={() => thumbDownComment(id)}
        />
      </div>
    </li>
  );
};

export default Comment;
