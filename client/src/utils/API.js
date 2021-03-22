import axios from "axios";

// https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters
// https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc

const API = {
  getBooks: async (title) => {
    const modifiedTitle = title
      .split(" ")
      .reduce((acc, val) => acc + "+" + val)
      .toLowerCase();
    return axios.get(
      `https://www.googleapis.com/books/v1/valumes?q=${modifiedTitle}`
    );
  },
  getSavedBooks: async () => {
    return axios.get("/api/books");
  },
  deleteBook: async (id) => {
    return axios.delete("/api/books/" + id);
  },
  saveBook: async (book) => {
    return axios.post("/api/books", book);
  },
};

export default API;
