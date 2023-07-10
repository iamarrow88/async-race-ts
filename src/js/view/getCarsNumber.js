"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const getData_1 = __importDefault(require("../app/getData"));
const templates_1 = require("./../app/templates");
const btns_and_forms_1 = require("./../controller/btns-and-forms");
const renderCarsList_1 = __importDefault(require("./renderCarsList"));
function getCarsNumber(garageHeader, carsPerPage) {
    (0, getData_1.default)(templates_1.baseURL, templates_1.path.garage).then((result) => {
        garageHeader.innerHTML = `Garage(${result.length})`;
        garageHeader.dataset["number"] = `${result.length}`;
        const howManyPages = Math.ceil(result.length / carsPerPage);
        /* garageHeader.dataset["pages"] = howManyPages; */
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        btns_and_forms_1.garageVars["garageCurrentPage"] = btns_and_forms_1.garageVars["garagePageNumber"].innerHTML
            .match(/#(\d+)/g)[0]
            .slice(1);
        function setInactiveStyleBtn(prevBtn, nextBtn, howManyPages) {
            if (btns_and_forms_1.garageVars["garageCurrentPage"] <= 1) {
                prevBtn.classList.add("btn-inactive");
            }
            else if (btns_and_forms_1.garageVars["garageCurrentPage"] >= howManyPages) {
                nextBtn.classList.add("btn-inactive");
            }
            else {
                nextBtn.classList.remove("btn-inactive");
                prevBtn.classList.remove("btn-inactive");
            }
        }
        setInactiveStyleBtn(prevBtn, nextBtn, howManyPages);
        prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener("click", function () {
            if (btns_and_forms_1.garageVars["garageCurrentPage"] > 1) {
                btns_and_forms_1.garageVars["garageCurrentPage"]--;
                btns_and_forms_1.garageVars["garagePageNumber"].innerHTML = `Page#${btns_and_forms_1.garageVars["garageCurrentPage"]}`;
                setInactiveStyleBtn(prevBtn, nextBtn, howManyPages);
                (0, renderCarsList_1.default)(btns_and_forms_1.garageVars["garageHeader"], btns_and_forms_1.garageVars["garageTable"], btns_and_forms_1.garageVars["garageCurrentPage"], 7, document.querySelector(".garage__page-number"));
            }
        });
        nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", function () {
            if (btns_and_forms_1.garageVars["garageCurrentPage"] < howManyPages) {
                btns_and_forms_1.garageVars["garageCurrentPage"]++;
                btns_and_forms_1.garageVars["garagePageNumber"].innerHTML = `Page#${btns_and_forms_1.garageVars["garageCurrentPage"]}`;
                setInactiveStyleBtn(prevBtn, nextBtn, howManyPages);
                (0, renderCarsList_1.default)(btns_and_forms_1.garageVars["garageHeader"], btns_and_forms_1.garageVars["garageTable"], btns_and_forms_1.garageVars["garageCurrentPage"], 7, document.querySelector(".garage__page-number"));
            }
        });
    });
}
exports.default = getCarsNumber;
