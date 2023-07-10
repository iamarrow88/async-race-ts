import { garageVars } from "./btns-and-forms";

export default async function setDriveStatus(id: number) {
  /*   const currentCar = document.querySelector(`[data-carimgid="${id}"]`);
   */ await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
    method: "PATCH",
  }).then((res) => {
    console.log(res.status);
    if (res.status === 500) {
      window.cancelAnimationFrame(garageVars[requestID]);
    }
  });
}
