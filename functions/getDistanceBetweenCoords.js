module.exports = getDistanceBetweenCoords = (from, to) => {
  const lat1InRadians = (from.latitude * Math.PI) / 180;
  const lat2InRadians = (to.latitude * Math.PI) / 180;
  const diffLat = ((to.latitude - from.latitude) * Math.PI) / 180;
  const diffLon = ((to.longitude - from.longitude) * Math.PI) / 180;

  const earthRadius = 6378137;

  const a =
    Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
    Math.cos(lat1InRadians) *
      Math.cos(lat2InRadians) *
      Math.sin(diffLon / 2) *
      Math.sin(diffLon / 2);

  const res = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(earthRadius * res);
};
