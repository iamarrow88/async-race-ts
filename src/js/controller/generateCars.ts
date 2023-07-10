import getRandomCarName from "./../app/getRandomCarName";
import getRandomColor from "./getRandomColor";
import postCar from "./../app/postData";
import cars from "./carMakesModels";
import getData from "../app/getData";
import { baseURL, path } from "../app/templates";
import renderCarsList from "./../view/renderCarsList";
import { garageVars } from "./../controller/btns-and-forms";

export default function generateCars() {
  const numberOfCars = 100;
  let i = 0;
  do {
    postCar(getRandomCarName(cars), getRandomColor());
    i++;
  } while (i < numberOfCars);
  getData(baseURL, path.garage).then((data) => {
    console.log(data.lenght);
  });
  const carsNum = +garageVars["garageHeader"].dataset["number"];
  garageVars["garageHeader"].innerHTML = `Garage(${carsNum + 100})`;
  garageVars["garageHeader"].dataset["number"] = carsNum + 100;
  renderCarsList(
    garageVars["garageHeader"],
    garageVars["garageTable"],
    garageVars["garageCurrentPage"],
    7,
    document.querySelector(".garage__page-number")
  );
}
