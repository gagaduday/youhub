import { FETCH_VIDEO_DETAIL } from "../actions/types";

const fetchVideoDetailReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_VIDEO_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default fetchVideoDetailReducer;
