const removeFromArray = function(array) {
    for (const elementToRemove of arguments) {
        let index = 0;
        let arrayLength = array.length;

        while (index < arrayLength) {
            if (array[index] === elementToRemove) {
                array.splice(index, 1);
                arrayLength--;
            }

            else {
                index++;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
