import axios from "axios";
require("dotenv").config();
// const API_KEY = process.env.NEW_YORK_TIMES_KEY;

// https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters
// https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
// return axios.post("/api/books", book);

const API = {
  saveBook: async (bookToSave) => {
    return axios.post("http://localhost:3001/api/books", bookToSave);
  },
  searchBooks: async (search) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
  getSavedBooks: async () => {
    return axios.get("/api/books");
  },
  getBook: async (id) => {
    return axios.get(`/api/books/${id}`);
  },
  deleteBook: async (id) => {
    return axios.delete("/api/books/" + id);
  },
  // not sure how this API key is called, but this is a placeholder
  // newYorkTimes: async () => {
  //   return axios.get(
  //     `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${API_KEY}`
  //   );
  // },
};

export default API;
