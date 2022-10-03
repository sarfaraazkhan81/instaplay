import { combineReducers } from "redux";
import { SearchApiReducer } from "./SearchApiReducer";
import { ListingApiReducer } from "./ListingApiReducer";
import { TrailerApiReducer } from "./TrailerApiReducer";
import { LoginTokenReducer } from "./LoginTokenReducer";
import { IndividualReducer } from "./IndividualReducer";

const allReducer = combineReducers({
  ListingApiReducer,
  SearchApiReducer,
  TrailerApiReducer,
  LoginTokenReducer,
  IndividualReducer,
});

export default allReducer;
