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
const addAnimation_1 = __importDefault(require("./addAnimation"));
const setDriveStatus_1 = __importDefault(require("./setDriveStatus"));
function raceOneCar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentCar = document.querySelector(`[data-carimgid="${id}"]`);
        yield fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
            method: "PATCH",
        })
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            (0, addAnimation_1.default)(currentCar, data.velocity);
            (0, setDriveStatus_1.default)(id);
        });
    });
}
exports.default = raceOneCar;
