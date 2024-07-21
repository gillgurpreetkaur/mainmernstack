const express = require("express");
const router = express.Router();
const contForm=require("../conrol/contect-form");
router.route("/contact").post(contForm);

module.exports =router;
