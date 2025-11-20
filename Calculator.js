const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let input = "";

// Button clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (value === "AC") {
      input = "";
      display.value = "";
      return;
    }

    if (value === "C") {
      input = input.slice(0, -1);
      display.value = input;
      return;
    }

    if (value === "=") {
      try {
        input = eval(input).toString();
        display.value = input;
      } catch {
        display.value = "Error";
      }
      return;
    }

    input += value;
    display.value = input;
  });
});


// Bonus: Keyboard support
document.addEventListener("keydown", e => {
  if ((e.key >= 0 && e.key <= 9) || "+-*/.%".includes(e.key)) {
    input += e.key;
    display.value = input;
  }

  if (e.key === "Enter") {
    try {
      input = eval(input).toString();
      display.value = input;
    } catch {
      display.value = "Error";
    }
  }

  if (e.key === "Backspace") {
    input = input.slice(0, -1);
    display.value = input;
  }

  if (e.key === "Escape") {
    input = "";
    display.value = "";
  }
});