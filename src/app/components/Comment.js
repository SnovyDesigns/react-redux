import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../helpers';

const Comment = props => {
  return (
    <li className="list-group-item">
      <small className="mb-2">Commented: {getDate()}</small>
      <small className="mb-2">
        <i className="far fa-thumbs-up" /> {props.thumbUpVotes} |{' '}
        <i className="far fa-thumbs-down" /> {props.thumbDownVotes}
      </small>
      <p>{props.text}</p>
      <small className="mt-2 mb-2">
        <a href="/" onClick={props.onEditClick.bind(this, props.id)}>
          EDIT
        </a>{' '}
        |{' '}
        <a href="/" onClick={props.onRemoveClick.bind(this, props.id)}>
          REMOVE
        </a>
      </small>
      {props.editEnabled ? (
        <form onSubmit={props.editCommentSubmit.bind(this, props.id)}>
          <div className="form-group">
            <textarea
              className="form-control"
              name="commentEdit"
              placeholder="Type new text..."
              value={props.edditedText}
              onChange={props.getEdittedCommentValue.bind(this, props.id)}
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
          onClick={props.thumbUpClick.bind(this, props.id)}
        />
        <i
          className="fas fa-thumbs-down"
          onClick={props.thumbDownClick.bind(this, props.id)}
        />
      </div>
    </li>
  );
};

Comment.propTypes = {
  thumbUpVotes: PropTypes.number.isRequired,
  thumbDownVotes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  edditedText: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  editCommentSubmit: PropTypes.func.isRequired,
  getEdittedCommentValue: PropTypes.func.isRequired,
  thumbUpClick: PropTypes.func.isRequired,
  thumbDownClick: PropTypes.func.isRequired
};

export default Comment;
