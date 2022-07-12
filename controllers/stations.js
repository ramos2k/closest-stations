const { request, response } = require("express");
const Station = require("../Models/station");
const filterStations = require("../functions/filterStations");
//const getDistanceBetweenCoords = require("../functions/getDistanceBetweenCoords");

const getStations = async (req, res = response) => {
  try {
    const stations = await Station.find().where("status").equals("IN_SERVICE");

    const body = {
      total: stations.length,
      items: stations,
    };

    res.status(200).json(body);
  } catch (error) {
    res.json({ message: error });
  }
};

const getClosestStations = async (req = request, res = response) => {
  const { latitude, longitude, km = 1 } = req.query;

  try {
    const stations = await Station.find().where("status").equals("IN_SERVICE");
    const currentMeters = km * 1000;
    const closest = filterStations(stations, currentMeters, {
      latitude,
      longitude,
    });
    const zeroStationsFound = 0;
    const totalStations = closest.length;

    if (totalStations === zeroStationsFound) {
      res.status(404).json({ message: "There is no nearby stations" });
      return;
    }

    const body = {
      total: totalStations,
      items: closest,
    };

    res.status(200).json(body);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getStations,
  getClosestStations,
};
