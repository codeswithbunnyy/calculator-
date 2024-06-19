let displayValue = '';
let lastOperator = '';

function appendNumber(number) {
  if (number === '0' && displayValue === '') return; // Prevent leading zero
  if (number === '.' && displayValue.includes('.')) return; // Prevent multiple dots
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === '' && operator !== '-') return; // Prevent operator without a number
  if (lastOperator !== '') {
    calculate();
  }
  displayValue += operator;
  lastOperator = operator;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  lastOperator = '';
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  lastOperator = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}
