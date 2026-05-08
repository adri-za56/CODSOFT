const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.getAttribute("data-value");

        // Clear All
        if (value === "AC") {
            display.value = "";
        }

        // Delete Last Character
        else if (value === "DE") {
            display.value = display.value.toString().slice(0, -1);
        }

        // Calculate Result
        else if (value === "=") {

            try {
                display.value = eval(display.value);
            }

            catch {
                display.value = "Error";
            }
        }

        // Append Values
        else {
            display.value += value;
        }
    });
});


// Keyboard Support

document.addEventListener("keydown", (event) => {

    const key = event.key;

    // Allow Numbers and Operators
    if (
        !isNaN(key) ||
        ["+", "-", "*", "/", "."].includes(key)
    ) {
        display.value += key;
    }

    // Enter Key
    else if (key === "Enter") {

        try {
            display.value = eval(display.value);
        }

        catch {
            display.value = "Error";
        }
    }

    // Backspace Key
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape Key
    else if (key === "Escape") {
        display.value = "";
    }
});