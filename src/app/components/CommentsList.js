import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/commentsActions';
import Comment from './Comment';
import CommentAddForm from './CommentAddForm';
import '../../css/Comments.css';

class CommentsList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    thumbUpComment: PropTypes.func.isRequired,
    thumbDownComment: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
    editFormShow: PropTypes.func.isRequired,
    editFormChange: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired
  };
  getNewCommentValue = event => {
    let value = event.currentTarget.value;
    this.props.addFormChange(value);
  };
  onAddClick = event => {
    event.preventDefault();
    let value = this.props.commentValue;
    if (value !== '') {
      this.props.addComment(value);
    }
  };
  thumbUpClick = id => {
    this.props.thumbUpComment(id);
  };
  thumbDownClick = id => {
    this.props.thumbDownComment(id);
  };
  onRemoveClick = (id, e) => {
    e.preventDefault();
    this.props.removeComment(id);
  };
  onEditClick = (id, event) => {
    event.preventDefault();
    this.props.editFormShow(id);
  };
  getEdittedCommentValue = (id, event) => {
    let value = event.currentTarget.value;
    this.props.editFormChange(id, value);
  };
  editCommentSubmit = (id, event) => {
    event.preventDefault();
    this.props.editComment(id);
  };
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.comments.map(comment => (
            <Comment
              {...comment}
              thumbUpClick={this.thumbUpClick.bind(this)}
              thumbDownClick={this.thumbDownClick.bind(this)}
              onRemoveClick={this.onRemoveClick.bind(this)}
              onEditClick={this.onEditClick.bind(this)}
              getEdittedCommentValue={this.getEdittedCommentValue.bind(this)}
              editCommentSubmit={this.editCommentSubmit.bind(this)}
              key={comment.id}
            />
          ))}
        </ul>
        <hr />
        <CommentAddForm
          value={this.props.commentValue}
          getNewCommentValue={this.getNewCommentValue.bind(this)}
          onAddClick={this.onAddClick.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.comments });

const mapDispatchToProps = dispatch => ({
  addComment: text => dispatch(actions.addComment(text)),
  removeComment: id => dispatch(actions.removeComment(id)),
  editFormShow: id => dispatch(actions.editFormShow(id)),
  editFormChange: (id, value) => dispatch(actions.editFormChange(id, value)),
  editComment: id => dispatch(actions.editComment(id)),
  addFormChange: value => dispatch(actions.addFormChange(value)),
  thumbUpComment: id => dispatch(actions.thumbUpComment(id)),
  thumbDownComment: id => dispatch(actions.thumbDownComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
