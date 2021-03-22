// import all our reducers
import { combineReducers } from "redux";
import BookSearchResults from "./BookSearchResults.js";
import BookSearchInput from "./BookSearchInput.js";
import Loading from "./Loading.js";

// import changeWidth from "./changeWidth";

const allReducer = combineReducers({
  // name our reducers here
  BookSearchResults,
  BookSearchInput,
  Loading,
});

export default allReducer;
