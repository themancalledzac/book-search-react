const router = require("express").Router();
const books = require("./books");

// Post routes
router.use("/books", books);

module.exports = router;
