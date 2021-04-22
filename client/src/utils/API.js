/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require("dotenv").config();
export default {
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
};
