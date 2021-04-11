const BookSearchResults = (books = [], action) => {
  switch (action.type) {
    case "BOOK_SEARCH":
      return {
        books: [...action.books],
      };
    default:
      return books;
  }
};

export default BookSearchResults;
