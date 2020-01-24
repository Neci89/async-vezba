import { combineReducers } from "redux";

// REDUCERS
import postsReducer from './posts/posts.reducer';

export default combineReducers({
    allPosts: postsReducer
  });