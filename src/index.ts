import renderGaragePage from "./js/view/renderGaragePage";
import { garageVars, winnersVars } from "./js/controller/btns-and-forms";
// @ts-ignore
import styles from "./styles/styles.scss";
import createElem from "./js/view/createEl";
import renderBtns from "./js/view/renderBtns";
import renderWinnersPage from "./js/view/renderWinnersPage";
import postCar from "./js/app/postData";
import rgbToHex from "./js/app/rgbToHex";
import updateCar from "./js/controller/updateCar";
import removeCar from "./js/view/removeCar";
import raceOneCar from "./js/controller/raceOneCar";
import animate from "./js/controller/addAnimation";

const car: {
  createName: null | string;
  createColor: null | string;
  updateName: null | string;
  updateColor: null | string;
  updateId: null | string;
} = {
  createName: null,
  createColor: null,
  updateName: null,
  updateColor: null,
  updateId: null,
};

garageVars["body"] = document.querySelector(".body");
renderBtns(garageVars["body"]);

garageVars["garageContentBlock"] = createElem(
  "div",
  "garageContentBlock",
  "",
  garageVars["body"]
);
renderGaragePage(garageVars["garageContentBlock"]);

winnersVars["winnersContentBlock"] = createElem(
  "div",
  "winnersContentBlock hidden",
  "",
  garageVars["body"]
);
renderWinnersPage(winnersVars["winnersContentBlock"]);

if (garageVars["winnersButton"])
  garageVars["winnersButton"].addEventListener("click", function () {
    if (winnersVars["winnersContentBlock"])
      winnersVars["winnersContentBlock"].classList.remove("hidden");
    if (garageVars["garageContentBlock"])
      garageVars["garageContentBlock"].classList.add("hidden");
  });

if (garageVars["garageButton"])
  garageVars["garageButton"].addEventListener("click", function () {
    if (winnersVars["winnersContentBlock"])
      winnersVars["winnersContentBlock"].classList.add("hidden");
    if (garageVars["garageContentBlock"])
      garageVars["garageContentBlock"].classList.remove("hidden");
  });

if (garageVars["createCarColorInput"])
  garageVars["createCarColorInput"].addEventListener("change", function (e) {
    //HTMLInputElement;
    if (e.target) car["createColor"] = e.target.value;
    return car["createColor"];
  });

if (garageVars["createCarNameInput"])
  garageVars["createCarNameInput"].addEventListener("change", function (e) {
    car["createName"] = e.target.value;
    return car["createName"];
  });

if (garageVars["createCarButton"])
  garageVars["createCarButton"].addEventListener("click", function () {
    if (garageVars["createCarNameInput"])
      garageVars["createCarNameInput"].value = "";
    if (garageVars["createCarColorInput"])
      garageVars["createCarColorInput"].setAttribute("value", "#000");
    if (garageVars["garageTable"]) garageVars["garageTable"].innerHTML = "";
    postCar(car["createName"], car["createColor"]);
  });

if (garageVars["updateCarButton"])
  garageVars["updateCarButton"].addEventListener("click", function (e) {
    if (garageVars["updateCarColorInput"])
      car["updateColor"] = garageVars["updateCarColorInput"].value;
    if (garageVars["updateCarNameInput"])
      car["updateName"] = garageVars["updateCarNameInput"].value;
    if (e.target) car["updateId"] = e.target.dataset["carid"];
    updateCar(car["updateName"], car["updateColor"], car["updateId"]);
  });

if (garageVars["garageTable"])
  garageVars["garageTable"].addEventListener("click", function (e) {
    if (e.target) {
      if (e.target.matches(".line__select")) {
        car["updateName"] =
          e.target.closest(".line__btns").childNodes[5].innerHTML;
        car["updateId"] = e.target.dataset["carid"];
        const color =
          e.target.closest(".line").childNodes[3].childNodes[7].style
            .backgroundColor;
        car["updateColor"] = rgbToHex(color);
        garageVars["updateCarNameInput"].value = car["updateName"];
        garageVars["updateCarColorInput"].setAttribute(
          "value",
          `${car["updateColor"]}`
        );
        garageVars["updateCarButton"].dataset.carid = `${car["updateId"]}`;
      }
      if (e.target.matches(".line__remove")) {
        removeCar(e.target.dataset["carid"]);
      }
    }
  });

garageVars["body"].addEventListener("click", function (e) {
  if (e.target.matches(".controls__start")) {
    raceOneCar(e.target.dataset.carid);
  }
});
