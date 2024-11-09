const portfolioApp = require("./portfolioApp");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
dotenv.config({ path: "./.env" });

// This sets a global variable that will always be equivalent to your app's base dir
global.__basedir = __dirname;

// Replace <DB_PWD> with real password
const DB = process.env.DATABASE_URL.replace("<DB_PWD>", process.env.DB_PWD_X);

//Connect MongoDB using Mongoose
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("PortFolio-TA DB Connected Successfully!");
  })
  .catch((err) => {
    console.log("Error in connecting DB!");
    console.log("Error->", err);
  });

const port = process.env.PORT || 4513;

const server = portfolioApp.listen(port, () => {
  console.log(`Server Running on Port - ${port}`);
});

// Handle Unhandled Rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting Down....");
  console.log("server.js file ->", err);
  server.close(() => {
    process.exit(1);
  });
});

// SIGTERM -> a Signal for program to really stop running
process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED, Shutting down gracefully!");
  server.close(() => {
    console.log("Process terminated!");
  });
});
