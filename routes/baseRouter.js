const express = require("express");
const {
  basePageContext,
  getSummary,
} = require("../controllers/baseController");

// Merge Param Implementation
const router = express.Router();

router.route("/").get(basePageContext);

router.route("/get-base-details/:typeX").get(getSummary);

module.exports = router;
