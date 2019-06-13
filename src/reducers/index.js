import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchVideoReducer from "./searchVideoReducer";
import videoReducer from "./videoReducer";
import fetchVideosReducer from "./fetchVideosReducer";

export default combineReducers({
  auth: authReducer,
  input: searchVideoReducer,
  videos: fetchVideosReducer,
  video: videoReducer
});
