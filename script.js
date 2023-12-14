//inputs
const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const allInputs = document.querySelectorAll("input");
//outputs
const outputYears = document.getElementById("output-years");
const outputMonths = document.getElementById("output-months");
const outputDays = document.getElementById("output-days");

const btnImg = document.querySelector(".btn-image");
const errorDay = document.getElementById("error-day");
const errorMonth = document.getElementById("error-month");
const errorYear = document.getElementById("error-year");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const validateInputs = function () {
  let validator = true;
  allInputs.forEach((inp) => {
    let parentDiv = inp.parentElement;
    if (!inp.value) {
      inp.style.borderColor = "red";
      parentDiv.querySelector("label").style.color = "red";
      errorDay.innerText = "This field is required";
      errorMonth.innerText = "This field is required";
      errorYear.innerText = "This field is required";
      validator = false;
      return;
    } else if (inputMonth.value > 12) {
      inp.style.borderColor = "red";
      errorMonth.innerText = "Must be a valid month";
      validator = false;
    } else if (inputDay.value > 31) {
      inp.style.borderColor = "red";
      errorDay.innerText = "Must be a valid day";
      validator = false;
    } else {
      inp.style.borderColor = "";
      errorDay.innerText = "";
      errorMonth.innerText = "";
      errorYear.innerText = "";
      validator = true;
    }
  });
  return validator;
};

// handling submit \

const handleSubmit = function (e) {
  if (validateInputs()) {
    //logic for when the entered day is greater than today
    if (inputDay.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    //logic for when the entered month is greater than this month
    if (inputMonth.value > month) {
      month = month + 12;
      year = year - 1;
      console.log(year);
    }

    const d = day - inputDay.value;
    const m = month - inputMonth.value;
    const y = year - inputYear.value;

    // outputting the age
    outputDays.innerHTML = d;
    outputMonths.innerHTML = m;
    outputYears.innerHTML = y;
  }
};

// Eventlistener
btnImg.addEventListener("click", handleSubmit);
