let cache = {};

function getRadians(degrees) {
  // If we've already calculated this particular value, return the cached value
  if (cache[degrees]) {
    return cache[degrees];
  }

  let radians = parseFloat(degrees) * (Math.PI / 180);

  // Cache this value so we don't have to recalculate it every time
  cache[degrees] = radians;
  return radians;
}

// See haversine function here: https://en.wikipedia.org/wiki/Versine#Haversine
function getAngle(delta) {
  return Math.pow(Math.sin(delta / 2), 2);
}

// See Haversine Formula here: https://en.wikipedia.org/wiki/Haversine_formula
function getDistance(pLatitude, pLongitude, qLatitude, qLongitude) {
  const R = 6371; // Radius of the Earth in km
  let radians = {
    pLatitude: getRadians(pLatitude),
    pLongitude: getRadians(pLongitude),
    qLatitude: getRadians(qLatitude),
    qLongitude: getRadians(qLongitude)
  };

  let latitudeDelta = radians.qLatitude - radians.pLatitude;
  let longitudeDelta = radians.qLongitude - radians.pLongitude;

  let angle = getAngle(latitudeDelta) + Math.cos(radians.pLatitude) * Math.cos(radians.qLatitude) * getAngle(longitudeDelta);

  return 2 * R * Math.asin(Math.sqrt(angle));
}

export { getAngle, getRadians, getDistance };
