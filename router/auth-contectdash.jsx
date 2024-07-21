const express = require("express");
const router = express.Router();
const getAllUser = require("../schemamongo/schemaofmon");
router.route('/users').get(getAllUser);

module.exports =router;