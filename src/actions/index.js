import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_VIDEOS,
  FETCH_RELATED,
  FETCH_POPULAR,
  FETCH_VIDEO_DETAIL,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR
} from "./types";
import youtube from "../apis/youtube";
import history from "../history";

// đăng nhập bằng google
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//fetch 1 video detail
export const fetchVideoDetail = id => async dispatch => {
  const response = await youtube.get(`/videos`, {
    params: {
      part: "snippet",
      id
    }
  });
  dispatch({ type: FETCH_VIDEO_DETAIL, payload: response.data.items });
};

//fetch danh sách video tìm kiếm
export const fetchVideos = term => async dispatch => {
  const response = await youtube.get("/search", {
    params: {
      part: "snippet",
      maxResults: "20",
      q: term,
      type: "video"
    }
  });
  dispatch({ type: FETCH_VIDEOS, payload: response.data.items });
  history.push(`/search/${term}`);
};

//fetch danh sách video liên quan
export const fetchRelated = id => async dispatch => {
  const response = await youtube.get("/search", {
    params: {
      part: "snippet",
      relatedToVideoId: id,
      maxResults: "10",
      type: "video"
    }
  });
  dispatch({ type: FETCH_RELATED, payload: response.data.items });
};

//fetch danh sách video trending
export const fetchPopular = () => async dispatch => {
  const response = await youtube.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: "20",
      regionCode: "VN"
    }
  });
  dispatch({ type: FETCH_POPULAR, payload: response.data.items });
};

// ẩn hiện cho sidebar
export const showSideBar = () => {
  return {
    type: SHOW_SIDEBAR,
    payload: true
  };
};

export const hideSideBar = () => {
  return {
    type: HIDE_SIDEBAR,
    payload: false
  };
};
