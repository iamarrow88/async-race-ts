export default function getRandomCarName(arr) {
  const length = arr.length;
  function randomizer(length) {
    return Math.floor(Math.random() * length);
  }
  let carName =
    arr[`${randomizer(length)}`].Make +
    " " +
    arr[`${randomizer(length)}`].Model;
  return carName;
}
