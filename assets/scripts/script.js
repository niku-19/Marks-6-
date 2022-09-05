const userInputData = document.querySelector(".textarea");
const button = document.querySelector(".button");
const translatedata = document.querySelector(".translated");

button?.addEventListener("click", () => {
  const API = `https://api.funtranslations.com/translate/minion.json?text=${userInputData.value}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      translatedata.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      alert("Something went error. Try again Later");
    });
});
