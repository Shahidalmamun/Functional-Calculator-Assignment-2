function calculator(operation, firstDigit, secondDigit) {
    if (typeof firstDigit !== 'number' || typeof secondDigit !== "number") {
        return ('Invalid number')
    }
    function addition(firstDigit, secondDigit) {
        return firstDigit + secondDigit;
    }

    function subtraction(firstDigit, secondDigit) {
        return firstDigit - secondDigit;
    }

    function multiplication(firstDigit, secondDigit) {
        return firstDigit * secondDigit;
    }

    function division(firstDigit, secondDigit) {
        if (secondDigit === 0) {
            return ('Division by zero is not allowed')
        }
        return firstDigit / secondDigit;
    }

    if (operation === 'add') {
        return addition(firstDigit, secondDigit)
    } else if (operation === 'subtract') {
        return subtraction(firstDigit, secondDigit)
    } else if (operation === 'multiply') {
        return multiplication(firstDigit, secondDigit)
    } else if (operation === 'divide') {
        return division(firstDigit, secondDigit)
    } else {
        return ('Invalid operation!');
    }

}

console.log(calculator("add", 10, 5));

console.log(calculator("subtract", 10, 5));

console.log(calculator("multiply", 4, 3));

console.log(calculator("divide", 20, 4));

console.log(calculator("divide", 10, 0));

console.log(calculator("invalid", 5, 3));