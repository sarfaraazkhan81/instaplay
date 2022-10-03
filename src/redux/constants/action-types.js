export const LoginTokenAct = (token) => ({
  type: "LOGIN_TOKEN",
  payload: token,
});

export const SearchMovieApi = (apiData) => ({
  type: "SEARCH_API",
  payload: apiData,
});

export const ListingApi = (apiData) => ({
  type: "LISTING_API",
  payload: apiData,
});
//   ,console.log(apiData, "api data")

export const TrailerApi = (apiData) => ({
  type: "TRAILER_API",
  payload: apiData,
});

export const IndMovie = (apiData) => ({
  type: "IND_MOVIE",
  payload: apiData,
});
