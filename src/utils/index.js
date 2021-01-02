/** greatCircleDistance */
const degreesToRadians = (degrees) => degrees * (Math.PI / 180);
const radiansToDegrees = (radians) => radians * (180 / Math.PI);
const earthRadius = 6371;
const greatCircleDistance = (angle) => 2 * Math.PI * earthRadius * (angle / 360);
const centralSubtendedAngle = (locationX, locationY) => {
  const locationXLatRadians = degreesToRadians(locationX.latitude);
  const locationYLatRadians = degreesToRadians(locationY.latitude);
  return radiansToDegrees(
    Math.acos(
      Math.sin(locationXLatRadians) * Math.sin(locationYLatRadians) +
        Math.cos(locationXLatRadians) *
          Math.cos(locationYLatRadians) *
          Math.cos(degreesToRadians(Math.abs(locationX.longitude - locationY.longitude)))
    )
  );
};
const distanceBetweenLocations = (locationX, locationY) => {
  const angel = centralSubtendedAngle(locationX, locationY);
  const km = greatCircleDistance(angel);

  return km * 3280.84;
};

/** END greatCircleDistance */

export default {
  distanceBetweenLocations,
};
