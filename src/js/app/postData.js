"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderCarsList_1 = __importDefault(require("./../view/renderCarsList"));
function postCar(carName, carColor) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch("http://127.0.0.1:3000/garage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: `${carName}`, color: `${carColor}` }),
        }).then((response) => {
            console.log(response.status);
            (0, renderCarsList_1.default)(document.querySelector(".garage__header"), document.querySelector(".table"), 1, 7, document.querySelector(".garage__page-number"));
        });
    });
}
exports.default = postCar;
