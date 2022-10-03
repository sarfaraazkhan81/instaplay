export const ListingApiReducer = (state = [], action) => {
  // console.log(action.payload, "api data");
  if (action.type === "LISTING_API") {
    return action.payload;
  }
  return state;
};
