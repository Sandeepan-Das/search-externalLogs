var express = require("express");
var router = express.Router();
var insertZip = require("../BusinessLayers/insertZip");
var buildZip = require("../BusinessLayers/buildZip");

// insert zip route
router.get("/insert", insertZip);

//pre process route
router.get("/build", buildZip);

//search query

module.exports = router;
