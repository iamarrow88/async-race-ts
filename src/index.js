"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderGaragePage_1 = __importDefault(require("./js/view/renderGaragePage"));
const btns_and_forms_1 = require("./js/controller/btns-and-forms");
const createEl_1 = __importDefault(require("./js/view/createEl"));
const renderBtns_1 = __importDefault(require("./js/view/renderBtns"));
const renderWinnersPage_1 = __importDefault(require("./js/view/renderWinnersPage"));
const postData_1 = __importDefault(require("./js/app/postData"));
const rgbToHex_1 = __importDefault(require("./js/app/rgbToHex"));
const updateCar_1 = __importDefault(require("./js/controller/updateCar"));
const removeCar_1 = __importDefault(require("./js/view/removeCar"));
const raceOneCar_1 = __importDefault(require("./js/controller/raceOneCar"));
const car = {
    createName: null,
    createColor: null,
    updateName: null,
    updateColor: null,
    updateId: null,
};
btns_and_forms_1.garageVars["body"] = document.querySelector(".body");
(0, renderBtns_1.default)(btns_and_forms_1.garageVars["body"]);
btns_and_forms_1.garageVars["garageContentBlock"] = (0, createEl_1.default)("div", "garageContentBlock", "", btns_and_forms_1.garageVars["body"]);
(0, renderGaragePage_1.default)(btns_and_forms_1.garageVars["garageContentBlock"]);
btns_and_forms_1.winnersVars["winnersContentBlock"] = (0, createEl_1.default)("div", "winnersContentBlock hidden", "", btns_and_forms_1.garageVars["body"]);
(0, renderWinnersPage_1.default)(btns_and_forms_1.winnersVars["winnersContentBlock"]);
if (btns_and_forms_1.garageVars["winnersButton"])
    btns_and_forms_1.garageVars["winnersButton"].addEventListener("click", function () {
        if (btns_and_forms_1.winnersVars["winnersContentBlock"])
            btns_and_forms_1.winnersVars["winnersContentBlock"].classList.remove("hidden");
        if (btns_and_forms_1.garageVars["garageContentBlock"])
            btns_and_forms_1.garageVars["garageContentBlock"].classList.add("hidden");
    });
if (btns_and_forms_1.garageVars["garageButton"])
    btns_and_forms_1.garageVars["garageButton"].addEventListener("click", function () {
        if (btns_and_forms_1.winnersVars["winnersContentBlock"])
            btns_and_forms_1.winnersVars["winnersContentBlock"].classList.add("hidden");
        if (btns_and_forms_1.garageVars["garageContentBlock"])
            btns_and_forms_1.garageVars["garageContentBlock"].classList.remove("hidden");
    });
if (btns_and_forms_1.garageVars["createCarColorInput"])
    btns_and_forms_1.garageVars["createCarColorInput"].addEventListener("change", function (e) {
        //HTMLInputElement;
        if (e.target)
            car["createColor"] = e.target.value;
        return car["createColor"];
    });
if (btns_and_forms_1.garageVars["createCarNameInput"])
    btns_and_forms_1.garageVars["createCarNameInput"].addEventListener("change", function (e) {
        car["createName"] = e.target.value;
        return car["createName"];
    });
if (btns_and_forms_1.garageVars["createCarButton"])
    btns_and_forms_1.garageVars["createCarButton"].addEventListener("click", function () {
        if (btns_and_forms_1.garageVars["createCarNameInput"])
            btns_and_forms_1.garageVars["createCarNameInput"].value = "";
        if (btns_and_forms_1.garageVars["createCarColorInput"])
            btns_and_forms_1.garageVars["createCarColorInput"].setAttribute("value", "#000");
        if (btns_and_forms_1.garageVars["garageTable"])
            btns_and_forms_1.garageVars["garageTable"].innerHTML = "";
        (0, postData_1.default)(car["createName"], car["createColor"]);
    });
if (btns_and_forms_1.garageVars["updateCarButton"])
    btns_and_forms_1.garageVars["updateCarButton"].addEventListener("click", function (e) {
        if (btns_and_forms_1.garageVars["updateCarColorInput"])
            car["updateColor"] = btns_and_forms_1.garageVars["updateCarColorInput"].value;
        if (btns_and_forms_1.garageVars["updateCarNameInput"])
            car["updateName"] = btns_and_forms_1.garageVars["updateCarNameInput"].value;
        if (e.target)
            car["updateId"] = e.target.dataset["carid"];
        (0, updateCar_1.default)(car["updateName"], car["updateColor"], car["updateId"]);
    });
if (btns_and_forms_1.garageVars["garageTable"])
    btns_and_forms_1.garageVars["garageTable"].addEventListener("click", function (e) {
        if (e.target) {
            if (e.target.matches(".line__select")) {
                car["updateName"] =
                    e.target.closest(".line__btns").childNodes[5].innerHTML;
                car["updateId"] = e.target.dataset["carid"];
                const color = e.target.closest(".line").childNodes[3].childNodes[7].style
                    .backgroundColor;
                car["updateColor"] = (0, rgbToHex_1.default)(color);
                btns_and_forms_1.garageVars["updateCarNameInput"].value = car["updateName"];
                btns_and_forms_1.garageVars["updateCarColorInput"].setAttribute("value", `${car["updateColor"]}`);
                btns_and_forms_1.garageVars["updateCarButton"].dataset.carid = `${car["updateId"]}`;
            }
            if (e.target.matches(".line__remove")) {
                (0, removeCar_1.default)(e.target.dataset["carid"]);
            }
        }
    });
btns_and_forms_1.garageVars["body"].addEventListener("click", function (e) {
    if (e.target.matches(".controls__start")) {
        (0, raceOneCar_1.default)(e.target.dataset.carid);
    }
});
