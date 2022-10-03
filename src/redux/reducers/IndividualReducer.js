export const IndividualReducer = (state = [], action) => {
  if (action.type === "IND_MOVIE") {
    return action.payload;
  }
  return state;
};
