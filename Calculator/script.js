// JavaScript to handle calculator functionality

// Function to append a value to the result field
function appendToResult(value) {
  const resultField = document.getElementById('result');
  resultField.value += value;
}

// Function to clear the result field
function clearResult() {
  const resultField = document.getElementById('result');
  resultField.value = '';
}

// Function to calculate the result
function calculate() {
  const resultField = document.getElementById('result');
  const expression = resultField.value;

  try {
    // Use eval to calculate the result from the expression
    const result = eval(expression);

    // Display the result in the result field
    resultField.value = result;
  } catch (error) {
    // If there is an error in the expression, display "Error" in the result field
    resultField.value = 'Error';
  }
}
// JavaScript to handle calculator functionality

// ... (previous code remains the same)

// Function to delete the last entry from the result field
function deleteEntry() {
  const resultField = document.getElementById('result');
  const currentResult = resultField.value;

  // Remove the last character from the result
  resultField.value = currentResult.slice(0, -1);
}
