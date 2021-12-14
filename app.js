let bill = document.querySelector("#bill");
let service = document.querySelector("#service");
let people = document.querySelector("#people");

let btn = document.querySelector("#calculate");

let result = document.querySelector("#result");

btn.addEventListener("click", function () {
  let totalEach =
    (Number(bill.value) * Number(service.value)) / 100 / Number(people.value);
  result.innerHTML = totalEach;
});
