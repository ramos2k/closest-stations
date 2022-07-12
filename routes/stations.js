const { Router } = require("express");
const { getStations, getClosestStations } = require("../controllers/stations");

const router = Router();

router.get("/", getStations);

router.get("/stations", getClosestStations);

module.exports = router;
