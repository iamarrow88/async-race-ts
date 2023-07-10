"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderWinsList_1 = __importDefault(require("./renderWinsList"));
function renderWinnersPage(body) {
    body.insertAdjacentHTML("beforeend", `
	<h1 class="title">Winners</h1>
	<h2 class="subtitle">Page # </h2>
	
	<table class="winners__list">
		<thead>
			<tr class="list__subheader subheader">
				<th class="subheader__item">Number</th>
				<th class="subheader__item">Car</th>
				<th class="subheader__item">Name</th>
				<th class="subheader__item">Wins</th>
				<th class="subheader__item">Best Time (sec)</th>
			</tr>
		</thead>
	</table>
	`);
    const winnersheader = document.querySelector(".title");
    const winnersBlock = document.querySelector(".winners__list");
    (0, renderWinsList_1.default)(winnersheader, winnersBlock);
}
exports.default = renderWinnersPage;
