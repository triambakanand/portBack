const mongoose = require("mongoose");

// Creating Mongoose Schema -> How data should look
const basicDetailsSchema = new mongoose.Schema({
  typeX: {
    type: String,
  },
  summary: {
    type: String,
  },
});

// Creating Mongoose Model
const BasicDetails = mongoose.model("BasicDetails", basicDetailsSchema);

module.exports = BasicDetails;
