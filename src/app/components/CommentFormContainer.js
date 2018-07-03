import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import * as actions from '../actions/commentsActions';

const mapStateToProps = state => ({ ...state.comments });
const mapDispatchToProps = dispatch => ({
  addFormChange: value => dispatch(actions.addFormChange(value)),
  addComment: text => dispatch(actions.addComment(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
