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
Object.defineProperty(exports, "__esModule", { value: true });
const btns_and_forms_1 = require("./btns-and-forms");
function setDriveStatus(id) {
    return __awaiter(this, void 0, void 0, function* () {
        /*   const currentCar = document.querySelector(`[data-carimgid="${id}"]`);
         */ yield fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
            method: "PATCH",
        }).then((res) => {
            console.log(res.status);
            if (res.status === 500) {
                window.cancelAnimationFrame(btns_and_forms_1.garageVars[requestID]);
            }
        });
    });
}
exports.default = setDriveStatus;
