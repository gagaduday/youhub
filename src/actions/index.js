import {
  SIGN_IN,
  SIGN_OUT,
  SEARCH_VIDEO,
  FETCH_VIDEOS,
  FETCH_RELATED,
  FETCH_POPULAR,
  RENDER_VIDEOS,
  SELECT_VIDEO
} from "./types";
import youtube from "../apis/youtube";
import history from "../history";

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

export const searchVideo = input => {
  return {
    type: SEARCH_VIDEO,
    payload: input
  };
};

export const fetchVideos = term => async dispatch => {
  const response = await youtube.get("/search", {
    params: {
      part: "snippet",
      maxResults: "10",
      q: term
    }
  });
  dispatch({ type: FETCH_VIDEOS, payload: response.data.items });
  history.push(`/search`);
};

export const fetchRelated = videoId => async dispatch => {
  const response = await youtube.get("/search", {
    params: {
      part: "snippet",
      relatedToVideoId: videoId,
      type: "video"
    }
  });
  dispatch({ type: FETCH_RELATED, payload: response.data.items });
};

export const fetchPopular = () => async dispatch => {
  const response = await youtube.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "US"
    }
  });
  dispatch({ type: FETCH_POPULAR, payload: response.data.items });
};

export const renderVideos = videos => {
  return {
    type: RENDER_VIDEOS,
    payload: videos
  };
};

export const selectVideo = video => {
  history.push("/selected");
  return {
    type: SELECT_VIDEO,
    payload: video
  };
};
