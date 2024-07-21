const express = require("express");
const router = express.Router;
const home = require("../conrol/controllers");

router.get("/", home);
module.exports = router;