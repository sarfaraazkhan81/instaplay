export const SearchApiReducer = (state = [], action) => {
  if (action.type === "SEARCH_API") {
    return action.payload;
  }
  return state;
};
