const BookSearchInput = (state = "", action) => {
  switch (action.type) {
    case "BOOK_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.input,
        loading: false,
      };
    default:
      return state;
  }
};

export default BookSearchInput;
