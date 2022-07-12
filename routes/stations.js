const { Router } = require("express");
const { getStations, getClosestStations } = require("../controllers/stations");
const { query } = require("express-validator");
const { validateQuery } = require("../middleware/validateQuery");

const router = Router();

router.get("/", getStations);

router.get(
  "/stations",
  [
    query("latitude", "latitude is required and must be decimal")
      .notEmpty()
      .isDecimal(),
    query("longitude", "longitude is required and must be decimal")
      .notEmpty()
      .isDecimal(),
    validateQuery,
  ],
  getClosestStations
);

module.exports = router;
