import addAnimation from "./addAnimation";
import setDriveStatus from "./setDriveStatus";

export default async function raceOneCar(id) {
  const currentCar = document.querySelector(`[data-carimgid="${id}"]`);
  await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
    method: "PATCH",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      addAnimation(currentCar, data.velocity);
      setDriveStatus(id);
    });
}
