const express = require("express");
const cors = require("cors");
const baseRouter = require("./routes/baseRouter");

const portfolioApp = express();

// Implement CORs
portfolioApp.use(cors()); // Access-Control-Allow-Origin: *
portfolioApp.options("*", cors()); // options -> http method like get, patch, delete

portfolioApp.use("/", baseRouter);

portfolioApp.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on server`, 404));
});

module.exports = portfolioApp;
