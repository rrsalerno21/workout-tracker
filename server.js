const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || `mongodb://myDBuser:password1@ds155292.mlab.com:55292/heroku_d7fv27fw`;

mongoose.connect(MONGODB_URI);

// routes
const apiRoutes = require("./routes/apiRoutes.js");
const viewRoutes = require("./routes/viewRoutes.js")
app.use(apiRoutes);
app.use(viewRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});