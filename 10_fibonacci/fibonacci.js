const fibonacci = function(finalIndex) {
    let firstValue = 0;
    let secondValue = 1;
    let currentValue;

    if (finalIndex > 0) {
        for (let currentIndex = 1; currentIndex <= finalIndex; currentIndex++) {
            if (currentIndex == 1) {
                currentValue = 1;
            }

            else {
                currentValue = firstValue + secondValue;
                firstValue = secondValue;
                secondValue = currentValue;
            }
        }
        return currentValue;
    }

    else if (finalIndex == 0) {
        return 0;
    }

    else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
