export default function animate(car, velocity) {
  const displayWidth = document.documentElement.clientWidth;
  const distance = displayWidth * 0.8;
  const startTime = new Date().getTime();
  const startposition = 86;
  let requestID;
  function race() {
    const currentTime = new Date().getTime();
    const diff =
      startposition + ((currentTime - startTime) / 1000) * velocity * 2;
    car.style.transform = `translateX(${diff}px`;
    if (diff < distance) {
      requestID = window.requestAnimationFrame(race);
    }
  }
  race();
  return requestID;
}
