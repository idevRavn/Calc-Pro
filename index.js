const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

buttons.forEach((button) => {
  if (button.classList.contains("number")) {
    button.addEventListener("click", () => {
      display.textContent += button.textContent;
    });
  } else {
    button.addEventListener("click", () => {
      if (button.textContent === "AC") {
        display.textContent = "";
      } else if (button.textContent === "DE") {
        display.textContent = display.textContent.slice(0, -1);
      } else if (button.textContent === "=") {
        secondNumber = display.textContent;
        calculate(firstNumber, secondNumber, operator);
      } else {
        firstNumber = display.textContent;
        operator = button.textContent;
        display.textContent = "";
      }
    });
  }
});

function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "x":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "%":
      result = firstNumber % secondNumber;
      break;
    default:
      return "";
  }
  console.log(result);
  display.textContent = result;
}
