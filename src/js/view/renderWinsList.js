"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getData_1 = __importDefault(require("../app/getData"));
const templates_1 = require("../app/templates");
function renderWinsList(winnersHeader, winnersBlock) {
    const winnersIds = [];
    (0, getData_1.default)(templates_1.baseURL, templates_1.path.winners)
        .then((result) => {
        result.forEach((elem, ind) => {
            winnersIds.push(elem.id);
            winnersBlock.insertAdjacentHTML("beforeend", `
				<tr class="list__data data">
					<td class="data__number">${ind + 1}</th>
					<td class="data__img"></th>
					<td class="data__name"></th>
					<td class="data__wins">${elem.wins}</th>
					<td class="data__time">${elem.time}</th>
				</tr>
		`);
        });
        winnersHeader.innerHTML += `(${result.length})`;
        return winnersIds;
    })
        .then((winnersIds) => {
        winnersIds.forEach((id) => {
            const winPath = templates_1.path.garage + "/" + [`${id}`];
            const name = document.querySelector(".data__name");
            const color = document.querySelector(".data__img");
            (0, getData_1.default)(templates_1.baseURL, winPath).then((car) => {
                if (name)
                    name.innerHTML = `${car.name}`;
                if (color)
                    color.setAttribute("style", `background-color:${car.color}`);
            });
        });
    });
}
exports.default = renderWinsList;
