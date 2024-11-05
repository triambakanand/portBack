const express = require("express");
const cors = require("cors");

const portfolioApp = express();

// Implement CORs
portfolioApp.use(cors()); // Access-Control-Allow-Origin: *
portfolioApp.options("*", cors()); // options -> http method like get, patch, delete

portfolioApp.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on server`, 404));
});

module.exports = portfolioApp;
