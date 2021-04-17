/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require("dotenv").config();
export default {
  // saveBook: async (books) => {
  //   axios.post("/api/books", books).then((response) => {
  //     console.log(books);
  //     console.log("book saved?");
  //     console.log(response);
  //   });
  // },
  saveBook: async (bookToSave) => {
    return axios.post("/api/books", bookToSave);
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
