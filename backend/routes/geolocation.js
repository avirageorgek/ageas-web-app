const express = require("express");

const router = express.Router();

const {getGeoLocation} = require("../controllers/geoLocationController"); 


router.get("/", getGeoLocation);

module.exports = router;