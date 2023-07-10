"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createEl_1 = __importDefault(require("./createEl"));
const renderCarsList_1 = __importDefault(require("./renderCarsList"));
const generateCars_1 = __importDefault(require("./../controller/generateCars"));
const btns_and_forms_1 = require("./../controller/btns-and-forms");
function renderGaragePage(body) {
    const editBlockWrapper = (0, createEl_1.default)("div", "edit-block edit-block__wrapper", "", body);
    btns_and_forms_1.garageVars["createCarLine"] = (0, createEl_1.default)("div", "edit-block__block block__create-car create-car", "", editBlockWrapper);
    btns_and_forms_1.garageVars["createCarNameInput"] = (0, createEl_1.default)("input", "create-car create-car__name name", "", btns_and_forms_1.garageVars["createCarLine"], ["id", "createName"], ["type", "text"], ["name", "create-car-name"]);
    btns_and_forms_1.garageVars["createCarColorInput"] = (0, createEl_1.default)("input", "create-car create-car__color", "", btns_and_forms_1.garageVars["createCarLine"], ["id", "createColor"], ["type", "color"], ["name", "create-car-color"]);
    btns_and_forms_1.garageVars["createCarButton"] = (0, createEl_1.default)("button", "create-car create-car__btn btn", "Create", btns_and_forms_1.garageVars["createCarLine"], ["id", "createSubmit"], ["type", "submit"], ["name", "create-car-btn"]);
    btns_and_forms_1.garageVars["updateCarLine"] = (0, createEl_1.default)("div", "edit-block__block block__update-car update-car", "", editBlockWrapper);
    btns_and_forms_1.garageVars["updateCarNameInput"] = (0, createEl_1.default)("input", "update-car update-car__name name", "", btns_and_forms_1.garageVars["updateCarLine"], ["id", "updateName"], ["type", "text"], ["name", "update-car-name"]);
    btns_and_forms_1.garageVars["updateCarColorInput"] = (0, createEl_1.default)("input", "update-car update-car__color", "", btns_and_forms_1.garageVars["updateCarLine"], ["id", "updateColor"], ["type", "color"], ["name", "update-car-color"]);
    btns_and_forms_1.garageVars["updateCarButton"] = (0, createEl_1.default)("button", "update-car update-car__btn btn", "Update", btns_and_forms_1.garageVars["updateCarLine"], ["id", "updateSubmit"], ["type", "submit"], ["name", "update-car-btn"]);
    btns_and_forms_1.garageVars["allCarsControlsWrapper"] = (0, createEl_1.default)("div", "edit-block__race-btns race-btns", "", editBlockWrapper);
    btns_and_forms_1.garageVars["raceButton"] = (0, createEl_1.default)("button", "race-btns btn", "Race", btns_and_forms_1.garageVars["allCarsControlsWrapper"], ["id", "raceStart"], ["type", "submit"]);
    btns_and_forms_1.garageVars["resetButton"] = (0, createEl_1.default)("button", "race-btns btn", "Reset", btns_and_forms_1.garageVars["allCarsControlsWrapper"], ["id", "raceStop"], ["type", "submit"]);
    btns_and_forms_1.garageVars["generateCarsButton"] = (0, createEl_1.default)("button", "race-btns btn", "Ganarate Cars", btns_and_forms_1.garageVars["allCarsControlsWrapper"], ["id", "generateCars"], ["type", "submit"]);
    btns_and_forms_1.garageVars["garagePageBody"] = (0, createEl_1.default)("div", "garage", "", body);
    btns_and_forms_1.garageVars["garageHeader"] = (0, createEl_1.default)("h1", "garage__header", "Garage", btns_and_forms_1.garageVars["garagePageBody"]);
    btns_and_forms_1.garageVars["garagePageNumber"] = (0, createEl_1.default)("div", "garage__page-number", "Page #", btns_and_forms_1.garageVars["garagePageBody"]);
    btns_and_forms_1.garageVars["garageTable"] = (0, createEl_1.default)("div", "garage__table table", "", btns_and_forms_1.garageVars["garagePageBody"]);
    (0, renderCarsList_1.default)(btns_and_forms_1.garageVars["garageHeader"], btns_and_forms_1.garageVars["garageTable"], 1, 7, document.querySelector(".garage__page-number"));
    if (btns_and_forms_1.garageVars["generateCarsButton"])
        btns_and_forms_1.garageVars["generateCarsButton"].addEventListener("click", generateCars_1.default);
}
exports.default = renderGaragePage;
