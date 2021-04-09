const BookSearchInput = (searchInput = "", action) => {
  switch (action.type) {
    case "BOOK_SEARCH_INPUT":
      return (searchInput = action.input);
    default:
      return searchInput;
  }
};

export default BookSearchInput;
