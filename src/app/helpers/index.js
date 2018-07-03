export const newComment = (id, text) => ({
  id,
  text,
  thumbUpVotes: 0,
  thumbDownVotes: 0,
  editEnabled: false,
  edditedText: ''
});

export const filterComments = (comments, id) => {
  let filteredComments = comments.filter(comment => comment.id !== id);
  return filteredComments;
};

export const findComment = (comments, id) => {
  let comment = comments.find(comment => comment.id === id);
  return comment;
};

export const getDate = () => {
  let now = new Date(Date.now());
  let date = `${now.getFullYear()}/${now.getMonth()}/${now.getDay()}`;
  return date;
};

export const editAndClear = (comments, id) => {
  let value = findComment(comments, id).edditedText;
  findComment(comments, id).text = value;
  findComment(comments, id).editEnabled = false;
  findComment(comments, id).edditedText = '';
};
