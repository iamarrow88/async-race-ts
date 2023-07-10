import renderCarsList from "./../view/renderCarsList";
import { garageVars } from "./btns-and-forms";

export default async function updateCar(carName, carColor, id) {
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: `${carName}`, color: `${carColor}` }),
  }).then((response) => {
    console.log(response.status);
    renderCarsList(
      document.querySelector(".garage__header"),
      document.querySelector(".table"),
      garageVars["garageCurrentPage"],
      7,
      document.querySelector(".garage__page-number")
    );
  });
}
