const router = require("express").Router();
const bookRoutes = require("./books.js");

// Post route

router.use("/books", bookRoutes);

module.exports = router;
