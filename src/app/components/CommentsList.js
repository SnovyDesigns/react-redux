import React from 'react';
import CommentContainer from './CommentContainer';
import '../../css/Comments.css';

const CommentsList = ({ comments }) => (
  <ul className="list-group">
    {comments.map(comment => (
      <CommentContainer {...comment} key={comment.id} />
    ))}
  </ul>
);

export default CommentsList;
