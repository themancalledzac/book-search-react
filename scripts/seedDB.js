const mongoose = require("mongoose");
const { Books } = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch");

const bookSeed = [
  {
    authors: ["Grokking"],
    description:
      "An illustrated guide for programmers and other curious people",
    image: "",
    link: "",
    subtitle: "",
    title: "Algorithms",
  },
];

Books.remove({})
  .then(() => Books.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
