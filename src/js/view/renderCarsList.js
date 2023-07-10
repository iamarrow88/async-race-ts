"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getData_1 = __importDefault(require("../app/getData"));
const templates_1 = require("../app/templates");
const getCarsNumber_1 = __importDefault(require("./../view/getCarsNumber"));
const btns_and_forms_1 = require("./../controller/btns-and-forms");
const generateCars_1 = __importDefault(require("./../controller/generateCars"));
const addAnimation_1 = __importDefault(require("./../controller/addAnimation"));
function renderCarsList(garageHeader, garageTable, page, limit, garagePageNumber) {
    (0, getData_1.default)(`${templates_1.baseURL}${templates_1.path.garage}?_page=${page}&_limit=${limit}`).then((result) => {
        garageTable.innerHTML = "";
        if (garagePageNumber)
            garagePageNumber.innerHTML = `Page#${page}`;
        result.forEach((elem) => garageTable.insertAdjacentHTML("beforeend", `
		<div class="table__line line">
		<div class="line__btns">
			<button class="line__btn line__select" data-carId = ${elem.id}>Select</button>
			<button class="line__btn line__remove" data-carId = ${elem.id}>Remove</button>
			<h3 class="line__name">${elem.name}</h3>
		</div>
		<div class="line__track track">
			<div class="line__controls controls">
				<button class="controls__btn controls__start" data-carId = ${elem.id}>Start!</button>
				<button class="controls__btn controls__stop">Stop!</button>
			</div>
			<div class="line__dashed-line"></div>
			<div class="line__finish">
				<img src="../src/assets/flag.png" alt="finish flag" class="finish__pic">
			</div>
			<div class="line__img img" data-carImgId = ${elem.id} style="background-color: ${elem.color}">
			</div>
		</div>
	</div>
	`));
        if (!document.querySelector(".pagination")) {
            garageTable.insertAdjacentHTML("afterend", `
					<div class="pagination">
						<div class="pagination__btn btn prev-btn">Prev</div>
						<div class="pagination__btn btn next-btn">Next</div>
					</div>
					`);
            (0, getCarsNumber_1.default)(garageHeader, limit);
        }
        const raceCar = document.querySelector(".line__img");
        if (!raceCar && raceCar !== null)
            raceCar.addEventListener("click", function () {
                (0, addAnimation_1.default)(document.querySelector(".line__dashed-line"), raceCar);
            });
    });
    if (btns_and_forms_1.garageVars["generateCarsButton"])
        btns_and_forms_1.garageVars["generateCarsButton"].addEventListener("click", generateCars_1.default);
}
exports.default = renderCarsList;
