"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createEl_1 = __importDefault(require("./createEl"));
const btns_and_forms_1 = require("./../controller/btns-and-forms");
function renderBtns(body) {
    (0, createEl_1.default)("div", "garage-btns__wrapper", [
        (btns_and_forms_1.garageVars["garageButton"] = (0, createEl_1.default)("button", "btn garage-btn", "Garage")),
        (btns_and_forms_1.garageVars["winnersButton"] = (0, createEl_1.default)("button", "btn winers-btn", "Winners")),
    ], body);
}
exports.default = renderBtns;
