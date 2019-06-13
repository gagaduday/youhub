import { SIGN_IN, SIGN_OUT, SEARCH_VIDEO } from "./types";
import youtube from "../apis/youtube";

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
      q: term
    }
  });
  dispatch({ type: "FETCH_VIDEOS", payload: response.data.items });
};

export const renderVideos = videos => {
  return {
    type: "RENDER_VIDEOS",
    payload: videos
  };
};

export const selectVideo = video => {
  return {
    type: "SELECT_VIDEO",
    payload: video
  };
};
