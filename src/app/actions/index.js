import * as constants from '../constants';
import uuid from 'uuid';

export const addComment = text => ({
  type: constants.REMOVE_COMMENT,
  payload: {
    id: uuid.v4(),
    text
  }
});

export const removeComment = id => ({
  type: constants.REMOVE_COMMENT,
  payload: {
    id
  }
});

export const editComment = (id, text) => ({
  type: constants.EDIT_COMMENT,
  payload: {
    id,
    text
  }
});

export const thumbUpComment = () => ({
  type: constants.THUMB_UP_COMMENT
});

export const thumbDownComment = () => ({
  type: constants.THUMB_DOWN_COMMENT
});
