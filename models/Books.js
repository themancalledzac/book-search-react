const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: [String],
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: Date.now },
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
