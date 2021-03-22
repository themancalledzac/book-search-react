import axios from "axios";
require("dotenv").config();
const API_KEY = process.env.NEW_YORK_TIMES_KEY;

// https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters

const API = {
  searchBooks: async (search) => {
    const modifiedSearch = search
      .split(" ")
      // https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
      .reduce((acc, val) => acc + "+" + val)
      .toLowerCase();
    return axios.get(
      `https://www.googleapis.com/books/v1/valumes?q=${modifiedSearch}`
    );
  },
  // not sure how this API key is called, but this is a placeholder
  newYorkTimes: async () => {
    return axios.get(
      `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${API_KEY}`
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
