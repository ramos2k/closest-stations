const { response } = require("express");
const stations = require("../utils/stations");

const getStations = async (req, res = response) => {
  const stationsInService = stations.filter(
    (station) => station.status === "IN_SERVICE"
  );

  const body = {
    total: stationsInService.length,
    items: stationsInService,
  };

  res.status(200).json(body);
};

module.exports = {
  getStations,
};
