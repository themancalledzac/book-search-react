const db = require("../models");

// defining methods for the booksController
module.exports = {
  findAll: async (req, res) => {
    db.Books.find({})
      .sort({ data: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
    // try {
    //   const books = await Books.find({}).sort({ date: -1 });
    //   res.status(200).json(books);
    // } catch (err) {
    //   res.status(422).json(err);
    // }
  },
  create: async (req, res) => {
    db.Books.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: async (req, res) => {
    db.Books.findById({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  remove: async (req, res) => {
    db.Books.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
    // try {
    //   const bookDelete = await Books.findByIdAndRemove(req.paramms.id);
    //   res.status(200).json(bookDelete);
    // } catch (err) {
    //   res.status(422).json(err);
    // }
  },
};

// ------------------------------------------------------------------//
//                                                                   //
//                 old ways from in class assignments                //
//                                                                   //
// ------------------------------------------------------------------//
// db.Book.find(req.query)
//   .sort({ date: -1 })
//   .then((dbModel) => res.json(dbModel))
//   .catch((err) => res.status(422).json(err));
// create

// db.Book.create(req.body)
// .then((dbModel) => res.json(dbModel))
// .catch((err) => res.status(422).json(err));
// delete

// db.Book.findById({ _id: req.params.id })
//   .then((dbModel) => dbModel.remove())
//   .then((dbModel) => res.json(dbModel))
//   .catch((err) => res.status(422).json(err));
