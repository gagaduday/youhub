const fetchPopularReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default fetchPopularReducer;
