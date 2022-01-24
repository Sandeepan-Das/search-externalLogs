var express = require("express");
var router = express.Router();
var insertZip = require("../BusinessLayers/insertZip");
var buildZip = require("../BusinessLayers/buildZip");
var searchRoute = require("../BusinessLayers/searchZip")

// insert zip route
router.post("/insert", insertZip);

//pre process route
router.get("/build", buildZip);

//search query
router.post("/search",searchRoute);

module.exports = router;
