function showScientificCalculator() {
    document.getElementById('scientificCalculator').style.display = 'block';
    document.getElementById('simpleCalculator').style.display = 'none';
}

function showSimpleCalculator() {
    document.getElementById('simpleCalculator').style.display = 'block';
    document.getElementById('scientificCalculator').style.display = 'none';
}

// Scientific Calculator Functions
function appendSciInput(value) {
    document.getElementById('sciDisplay').value += value;
}

function clearSciDisplay() {
    document.getElementById('sciDisplay').value = '';
}

function calculateSciResult() {
    try {
        let result = eval(document.getElementById('sciDisplay').value);
        document.getElementById('sciDisplay').value = result;
    } catch (e) {
        document.getElementById('sciDisplay').value = 'Error';
    }
}

// Simple Calculator Functions
function appendSimpleInput(value) {
    document.getElementById('simpleDisplay').value += value;
}

function clearSimpleDisplay() {
    document.getElementById('simpleDisplay').value = '';
}

function calculateSimpleResult() {
    try {
        let result = eval(document.getElementById('simpleDisplay').value);
        document.getElementById('simpleDisplay').value = result;
    } catch (e) {
        document.getElementById('simpleDisplay').value = 'Error';
    }
}
// Event listener to capture keyboard input
document.addEventListener("keydown", function(event) {
    // Check if scientific calculator is active
    if (document.getElementById('scientificCalculator').style.display === 'block') {
        handleSciKeyboardInput(event.key);
    }
    // Check if simple calculator is active
    if (document.getElementById('simpleCalculator').style.display === 'block') {
        handleSimpleKeyboardInput(event.key);
    }
});

// Function to handle keyboard input for scientific calculator
function handleSciKeyboardInput(key) {
    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        appendSciInput(key);
    } else if (key === "Enter") {
        calculateSciResult();
    } else if (key === "Backspace") {
        clearSciDisplay();
    }
}

// Function to handle keyboard input for simple calculator
function handleSimpleKeyboardInput(key) {
    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        appendSimpleInput(key);
    } else if (key === "Enter") {
        calculateSimpleResult();
    } else if (key === "Backspace") {
        clearSimpleDisplay();
    }
}
