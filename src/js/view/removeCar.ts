import renderCarsList from "./../view/renderCarsList";
import { garageVars } from "./../controller/btns-and-forms";

export default async function removeCar(id: number) {
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: "DELETE",
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
