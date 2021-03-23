const BookSearchResults = (state = "", action) => {
  switch (action.type) {
    case "BOOK_SEARCH":
      return {
        ...state,
        books: [...action.books],
        loading: false,
      };
    default:
      return state;
  }
};

export default BookSearchResults;
