const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercent");
const peopleInput = document.getElementById("numberOfPeople");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

function money(value) {
  return value.toFixed(2);
}

function showError(message) {
  result.innerHTML = `<p class="error">${message}</p>`;
}

function showResults(tipAmount, total, perPerson) {
  result.innerHTML = `
    <p>Tip amount: $${money(tipAmount)}</p>
    <p>Total: $${money(total)}</p>
    <p>Total per person: $${money(perPerson)}</p>
  `;
}

calculateButton.addEventListener("click", () => {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipSelect.value);
  const people = Number(peopleInput.value);

  if (billInput.value.trim() === "" || Number.isNaN(bill)) {
    showError("Please enter a bill amount.");
    return;
  }

  if (bill < 0) {
    showError("Bill amount cannot be negative.");
    return;
  }

  if (peopleInput.value.trim() === "" || Number.isNaN(people)) {
    showError("Please enter the number of people.");
    return;
  }

  if (people <= 0) {
    showError("Number of people must be greater than zero.");
    return;
  }

  const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;
  const perPerson = total / people;

  showResults(tipAmount, total, perPerson);
});
