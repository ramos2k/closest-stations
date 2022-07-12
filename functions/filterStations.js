const getDistanceBetweenCoords = require("./getDistanceBetweenCoords");

module.exports = filterStations = (stations, currentMeters, coordsFrom) => {
  return stations
    .map((item) => {
      const coordsTo = {
        latitude: item.latitude,
        longitude: item.longitude,
      };
      const distance = getDistanceBetweenCoords(coordsFrom, coordsTo);
      return {
        ...item._doc,
        distance,
      };
    })
    .filter((s) => s.distance <= currentMeters)
    .sort((a, b) => a.distance - b.distance);
};
