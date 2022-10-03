export const TrailerApiReducer = (state = [], action) => {
  if (action.type === "TRAILER_API") {
    return action.payload;
  }
  return state;
};
