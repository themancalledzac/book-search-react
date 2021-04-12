const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/posts"
router.route("/").get(booksController.findAll).post(booksController.create);

// Matches with "/api/posts/:id"
router.route("/:id").delete(booksController.remove);

module.exports = router;
