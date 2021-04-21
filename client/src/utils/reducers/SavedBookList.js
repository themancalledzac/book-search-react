const SavedBookList = (books = [], action) => {
  switch (action.type) {
    case "BOOK_ADD":
      return {
        books: [...action.books],
      };
    default:
      return books;
  }
};

export default SavedBookList;
