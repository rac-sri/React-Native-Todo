const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POST_COMPLETE = 'sajdsa';
export const ADD_POST = 'ADD_POST';
import {combineReducers} from 'redux';

export const reddit = (state = [{name: 'demp'}, {name: 'hello'}], action) => {
  switch (action.type) {
    case ADD_POST:
      return [action.payload, ...state];
    case FETCH_POSTS:
      return state;
    case FETCH_POST_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({reddit});
