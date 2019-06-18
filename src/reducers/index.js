import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchVideoReducer from "./searchVideoReducer";
import videoReducer from "./videoReducer";
import fetchVideosReducer from "./fetchVideosReducer";
import fetchRelatedReducer from "./fetchRelatedReducer";
import fetchPopularReducer from "./fetchPopularReducer";
import toggleSideBarReducer from "./toggleSideBarReducer";

export default combineReducers({
  auth: authReducer,
  input: searchVideoReducer,
  videos: fetchVideosReducer,
  video: videoReducer,
  related: fetchRelatedReducer,
  popular: fetchPopularReducer,
  visible: toggleSideBarReducer
});
