var initialState = {
  authors: [],
  description: "",
  image: "",
  link: "",
  subtitle: "",
  title: "",
};

const SavedBookList = (savedBooks = {}, action) => {
  switch (action.type) {
    case "BOOK_ADD":
      return {
        savedBooks: [...action.savedBooks],
      };
    default:
      return savedBooks;
  }
};

export default SavedBookList;
