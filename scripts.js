// Function to perform operation based on button click
function performOperation(operation) {
    // Get the values of the two input numbers
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    // Perform the selected operation
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'sub') {
        result = num1 - num2;
    } else if (operation === 'mul') {
        result = num1 * num2;
    } else if (operation === 'div') {
        result = num1 / num2;
    }

    // Display the result
    document.getElementById('result').textContent = "Result: " + result;
}

// Function to perform operation based on dropdown selection
function performOperationDropdown() {
    // Get the values of the two input numbers
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Get the selected operation from the dropdown
    var operation = document.getElementById('operation').value;
    var result;

    // Perform the selected operation
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'sub') {
        result = num1 - num2;
    } else if (operation === 'mul') {
        result = num1 * num2;
    } else if (operation === 'div') {
        result = num1 / num2;
    }

    // Display the result
    document.getElementById('result').textContent = "Result: " + result;
}
