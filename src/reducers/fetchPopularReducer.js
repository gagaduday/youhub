import { FETCH_POPULAR } from "../actions/types";

const fetchPopularReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POPULAR:
      return action.payload;
    default:
      return state;
  }
};

export default fetchPopularReducer;
