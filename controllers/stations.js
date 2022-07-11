const { response } = require("express");
const Station = require("../Models/station");

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

module.exports = {
  getStations,
};
