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
function getStarted(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
            method: "PATCH",
        }).then((response) => {
            console.log(response.status);
            console.log(response);
            /* renderCarsList(
              document.querySelector(".garage__header"),
              document.querySelector(".table"),
              1,
              7,
              document.querySelector(".garage__page-number")
            ); */
        });
    });
}
exports.default = getStarted;
