const portfolioApp = require("./portfolioApp");

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
