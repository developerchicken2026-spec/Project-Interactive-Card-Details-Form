const inputName = document.querySelector("#name");
const inputNumber = document.querySelector("#number");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputCvc = document.querySelector("#cvc");
const btn = document.querySelector(".btn");
const errorName = document.querySelector(".error-name");
const errorNumber = document.querySelector(".error-number");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
const errorCvc = document.querySelector(".error-cvc");
const groupErrorMYC = document.querySelector(".group-error");
console.log(
  errorName,
  errorNumber,
  errorMonth,
  errorYear,
  errorCvc,
  groupErrorMYC,
);
console.log(inputName, inputNumber, inputMonth, inputYear, inputCvc, btn);

btn.addEventListener("click", () => {
  let isValue = true;
  const inputNameValue = inputName.value;
  const inputYearValue = inputYear.value;
  const inputMonthValue = inputMonth.value;
  const inputNumberValue = inputNumber.value;
  const inputCvcValue = inputCvc.value;

  if (inputNameValue === "" || inputNameValue.length < 8) {
    errorName.style.display = "flex";
    inputName.style.border = "1px solid red";
    isValue = false;
  } else {
    errorName.style.display = "none";
    inputName.style.border = "1px solid var(--gray-400)";
    isValue = true;
  }

  if (inputNumberValue === "" || inputNumberValue.length < 16) {
    errorNumber.style.display = "flex";
    inputNumber.style.border = "1px solid red";
    isValue = false;
  } else {
    errorNumber.style.display = "none";
    inputNumber.style.border = "1px solid var(--gray-400)";
    isValue = true;
  }

  if (inputMonthValue === "" || inputMonthValue.length < 1) {
    errorMonth.style.display = "flex";
    inputMonth.style.border = "1px solid red";
    isValue = false;
  } else {
    errorMonth.style.display = "none";
    inputMonth.style.border = "1px solid var(--gray-400)";
    isValue = true;
  }

  if (inputYearValue === "" || inputYearValue.length < 2) {
    errorYear.style.display = "flex";
    inputYear.style.border = "1px solid red";
    isValue = false;
  } else {
    errorYear.style.display = "none";
    inputYear.style.border = "1px solid var(--gray-400)";
    isValue = true;
  }

  if (inputCvcValue === "" || inputCvc.length < 4) {
    errorCvc.style.display = "flex";
    inputCvc.style.border = "1px solid red";
    isValue = false;
  } else {
    errorCvc.style.display = "none";
    inputCvc.style.border = "1px solid var(--gray-400)";
    isValue = true;
  }
});
