import createElem from "./createEl";
import { garageVars } from "./../controller/btns-and-forms";

export default function renderBtns(body: Element) {
  createElem(
    "div",
    "garage-btns__wrapper",
    [
      (garageVars["garageButton"] = createElem(
        "button",
        "btn garage-btn",
        "Garage"
      )),
      (garageVars["winnersButton"] = createElem(
        "button",
        "btn winers-btn",
        "Winners"
      )),
    ],
    body
  );
}
