const sumAll = function(numberOne, numberTwo) {
    if (Number.isInteger(numberOne) && Number.isInteger(numberTwo) && numberOne >= 0 && numberTwo >= 0) {
        let sum = 0;
        const startNumber = Math.min(numberOne, numberTwo);
        const endNumber = Math.max(numberOne, numberTwo);

        for (let number = startNumber; number <= endNumber; number++) {
            sum += number;
        }

        return sum;
    }

    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
