import { connect } from 'react-redux';
import Comment from './Comment';
import * as actions from '../actions/commentsActions';

const mapDispatchToProps = dispatch => ({
  removeComment: id => dispatch(actions.removeComment(id)),
  editFormShow: id => dispatch(actions.editFormShow(id)),
  editFormChange: (id, value) => dispatch(actions.editFormChange(id, value)),
  editComment: id => dispatch(actions.editComment(id)),
  thumbUpComment: id => dispatch(actions.thumbUpComment(id)),
  thumbDownComment: id => dispatch(actions.thumbDownComment(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Comment);
