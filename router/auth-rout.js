const express = require("express");
const router = express.Router();
const home = require("../conrol/controllers");
const signup = require("../validator/aouth-validate");
const validate = require("../midalware/validmidelware");
router.get("/", home.home);
router.post("/registration",validate(signup) ,home.registration);
router.post("/login", home.login);
module.exports = router;