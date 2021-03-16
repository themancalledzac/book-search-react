const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// defines the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes, both API and view
app.use(routes);

// ??
// require("./config/connect");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch");

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
