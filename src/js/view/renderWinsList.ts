import getData from "../app/getData";
import { baseURL, path } from "../app/templates";
import { resWinners } from "./../interfaces";

export default function renderWinsList(
  winnersHeader: Element,
  winnersBlock: Element
) {
  const winnersIds: [] | number[] = [];

  getData(baseURL, path.winners)
    .then((result) => {
      result.forEach((elem: resWinners, ind: number) => {
        winnersIds.push(elem.id);
        winnersBlock.insertAdjacentHTML(
          "beforeend",
          `
				<tr class="list__data data">
					<td class="data__number">${ind + 1}</th>
					<td class="data__img"></th>
					<td class="data__name"></th>
					<td class="data__wins">${elem.wins}</th>
					<td class="data__time">${elem.time}</th>
				</tr>
		`
        );
      });
      winnersHeader.innerHTML += `(${result.length})`;
      return winnersIds;
    })
    .then((winnersIds) => {
      winnersIds.forEach((id) => {
        const winPath = path.garage + "/" + [`${id}`];
        const name = document.querySelector(".data__name");
        const color = document.querySelector(".data__img");

        getData(baseURL, winPath).then((car) => {
          if (name) name.innerHTML = `${car.name}`;
          if (color)
            color.setAttribute("style", `background-color:${car.color}`);
        });
      });
    });
}
