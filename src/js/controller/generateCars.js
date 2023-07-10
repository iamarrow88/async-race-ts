"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomCarName_1 = __importDefault(require("./../app/getRandomCarName"));
const getRandomColor_1 = __importDefault(require("./getRandomColor"));
const postData_1 = __importDefault(require("./../app/postData"));
const carMakesModels_1 = __importDefault(require("./carMakesModels"));
const getData_1 = __importDefault(require("../app/getData"));
const templates_1 = require("../app/templates");
const renderCarsList_1 = __importDefault(require("./../view/renderCarsList"));
const btns_and_forms_1 = require("./../controller/btns-and-forms");
function generateCars() {
    const numberOfCars = 100;
    let i = 0;
    do {
        (0, postData_1.default)((0, getRandomCarName_1.default)(carMakesModels_1.default), (0, getRandomColor_1.default)());
        i++;
    } while (i < numberOfCars);
    (0, getData_1.default)(templates_1.baseURL, templates_1.path.garage).then((data) => {
        console.log(data.lenght);
    });
    const carsNum = +btns_and_forms_1.garageVars["garageHeader"].dataset["number"];
    btns_and_forms_1.garageVars["garageHeader"].innerHTML = `Garage(${carsNum + 100})`;
    btns_and_forms_1.garageVars["garageHeader"].dataset["number"] = carsNum + 100;
    (0, renderCarsList_1.default)(btns_and_forms_1.garageVars["garageHeader"], btns_and_forms_1.garageVars["garageTable"], btns_and_forms_1.garageVars["garageCurrentPage"], 7, document.querySelector(".garage__page-number"));
}
exports.default = generateCars;
