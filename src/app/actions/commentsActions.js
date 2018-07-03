import * as constants from '../constants';
import uuid from 'uuid';

export const addComment = text => ({
  type: constants.ADD_COMMENT,
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

export const editFormShow = id => ({
  type: constants.EDIT_FORM_SHOW,
  payload: {
    id
  }
});

export const editFormChange = (id, value) => ({
  type: constants.EDIT_FORM_CHANGE,
  payload: {
    id,
    value
  }
});

export const addFormChange = value => ({
  type: constants.ADD_FORM_CHANGE,
  payload: {
    value
  }
});

export const editComment = id => ({
  type: constants.EDIT_COMMENT,
  payload: {
    id
  }
});

export const thumbUpComment = id => ({
  type: constants.THUMB_UP_COMMENT,
  payload: {
    id
  }
});

export const thumbDownComment = id => ({
  type: constants.THUMB_DOWN_COMMENT,
  payload: {
    id
  }
});
