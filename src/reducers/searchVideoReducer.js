import { SEARCH_VIDEO } from "../actions/types";

const searchVideoReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH_VIDEO:
      return action.payload;
    default:
      return state;
  }
};

export default searchVideoReducer;
