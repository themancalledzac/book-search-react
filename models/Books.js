const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: [String] },
  description: { type: String },
  image: { type: String },
  link: { type: String },
  subtitle: { type: String },
  title: { type: String },
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
