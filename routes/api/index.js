const router = require("express").Router();
const books = require("./books.js");

// Post routes
router.use("/books", books);

module.exports = router;
