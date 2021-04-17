var initialState = {
  array: [],
};

const SavedBookList = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_ADD":
      return {
        ...state,
        array: [...state.array, action.payload],
      };
    default:
      return state;
  }
};

export default SavedBookList;
