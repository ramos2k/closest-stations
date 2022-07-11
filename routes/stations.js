const { Router } = require("express");
const { getStations } = require("../controllers/stations");

const router = Router();

router.get("/", getStations);

module.exports = router;
