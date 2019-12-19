const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POST_COMPLETE = 'sajdsa';

export const reddit = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state;
    case FETCH_POST_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};
