const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;

function checkLength() {
  if (display.textContent.length > 14) {
    display.textContent = "I'm full, bruh?!!";
  }
}

buttons.forEach((button) => {
  if (button.classList.contains("number")) {
    button.addEventListener("click", () => {
      if (
        display.textContent === "Are you serious?" ||
        display.textContent === "I'm full, bruh?!!"
      ) {
        display.textContent = "";
        result = "";
        display.textContent += button.textContent;
      } else if (display.textContent.includes(".")) {
        if (button.textContent !== ".") {
          display.textContent += button.textContent;
        }
      } else {
        display.textContent += button.textContent;
      }
      checkLength();
    });
  } else {
    button.addEventListener("click", () => {
      if (button.textContent === "AC") {
        display.textContent = "";
      } else if (button.textContent === "DE") {
        display.textContent = display.textContent.slice(0, -1);
      } else if (button.textContent === "=") {
        if (display.textContent !== "") {
          secondNumber = parseFloat(display.textContent);
          calculate(firstNumber, secondNumber, operator);
        }
      } else {
        if (
          display.textContent !== "" &&
          display.textContent !== "I'm full, bruh?!!"
        ) {
          firstNumber = parseFloat(display.textContent);
          operator = button.textContent;
          display.textContent = "";
        }
      }
    });
    checkLength();
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
      if (secondNumber === 0) {
        result = "Are you serious?";
      } else {
        result = firstNumber / secondNumber;
      }
      break;
    case "%":
      result = firstNumber % secondNumber;
      break;
    default:
      return "Invalid operator!";
  }
  display.textContent = result;
  result = 0;
  operator = "";
}
