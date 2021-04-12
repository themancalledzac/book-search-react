const express = require("express");
var cors = require("cors");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(cors());
const PORT = process.env.PORT || 3001;
// defines the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ??
// require("./config/connect");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// add routes, both API and view
app.use(routes);

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
