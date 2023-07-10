import renderWinsList from "./renderWinsList";

export default function renderWinnersPage(body) {
  body.insertAdjacentHTML(
    "beforeend",
    `
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
	`
  );
  const winnersheader = document.querySelector(".title");
  const winnersBlock = document.querySelector(".winners__list");
  renderWinsList(winnersheader, winnersBlock);
}
