import * as constants from '../constants';
import {
  newComment,
  filterComments,
  findComment,
  editAndClear
} from '../helpers';
import uuid from 'uuid';

const initialState = {
  comments: [
    {
      id: uuid.v4(),
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident corporis a nobis odio esse odit quo quos tempora maiores.',
      thumbUpVotes: 0,
      thumbDownVotes: 0,
      editEnabled: false,
      edditedText: ''
    }
  ],
  commentValue: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_FORM_CHANGE:
      return { ...state, commentValue: action.payload.value };
    case constants.ADD_COMMENT:
      return {
        ...state,
        comments: [
          newComment(action.payload.id, action.payload.text),
          ...state.comments
        ],
        commentValue: ''
      };
    case constants.REMOVE_COMMENT:
      return {
        ...state,
        comments: filterComments(state.comments, action.payload.id)
      };
    case constants.EDIT_FORM_SHOW:
      findComment(state.comments, action.payload.id).editEnabled = true;
      return {
        ...state,
        comments: [...state.comments]
      };
    case constants.EDIT_FORM_CHANGE:
      findComment(state.comments, action.payload.id).edditedText =
        action.payload.value;
      return {
        ...state,
        comments: [...state.comments]
      };
    case constants.EDIT_COMMENT:
      editAndClear(state.comments, action.payload.id);
      return {
        ...state,
        comments: [...state.comments]
      };
    case constants.THUMB_UP_COMMENT:
      findComment(state.comments, action.payload.id).thumbUpVotes += 1;
      return {
        ...state,
        comments: [...state.comments]
      };
    case constants.THUMB_DOWN_COMMENT:
      findComment(state.comments, action.payload.id).thumbDownVotes += 1;
      return {
        ...state,
        comments: [...state.comments]
      };
    default:
      return state;
  }
};
