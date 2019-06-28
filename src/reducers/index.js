import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchVideoReducer from "./searchVideoReducer";
import fetchVideosReducer from "./fetchVideosReducer";
import fetchRelatedReducer from "./fetchRelatedReducer";
import fetchPopularReducer from "./fetchPopularReducer";
import toggleSideBarReducer from "./toggleSideBarReducer";
import fetchVideoDetailReducer from "./fetchVideoDetailReducer";

export default combineReducers({
  auth: authReducer,
  input: searchVideoReducer,
  videos: fetchVideosReducer,
  related: fetchRelatedReducer,
  popular: fetchPopularReducer,
  visible: toggleSideBarReducer,
  videoDetail: fetchVideoDetailReducer
});
