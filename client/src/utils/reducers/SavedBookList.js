const SavedBookList = (savedBooks = [], action) => {
  switch (action.type) {
    case "BOOK_ADD":
      return {
        savedBooks: [...action.books],
      };
    default:
      return savedBooks;
  }
};

export default SavedBookList;
