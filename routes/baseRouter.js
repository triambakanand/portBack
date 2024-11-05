const express = require("express");
const { baseAPI } = require("../controller/baseController");

// Merge Param Implementation
const router = express.Router();

router.route("/").get(baseAPI);

module.exports = router;
