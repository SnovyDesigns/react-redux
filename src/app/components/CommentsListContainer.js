import { connect } from 'react-redux';
import CommentsList from './CommentsList';

const mapStateToProps = state => ({ ...state.comments });

export default connect(mapStateToProps)(CommentsList);
