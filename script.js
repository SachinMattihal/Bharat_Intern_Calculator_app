let currentInput = '';

function appendInput(value) {
    currentInput += value;
    updateDisplay();
}

function clearInput() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid input');
        }
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
