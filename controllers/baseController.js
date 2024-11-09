const BasicDetails = require("../models/basicDetails");

exports.basePageContext = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "Welcome Page",
  });
};

exports.getSummary = async (req, res, next) => {
  let allBasicDetails = await BasicDetails.find();

  const { typeX } = req.params;
  let endResult = "";

  for (let i in allBasicDetails) {
    if (allBasicDetails[i].typeX === typeX) {
      endResult = allBasicDetails[i];
    }
  }

  res.status(200).json({
    status: "success",
    data: endResult,
  });
};
