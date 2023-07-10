export default async function getStarted(id) {
  await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
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
}
