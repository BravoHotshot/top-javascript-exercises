const palindromes = function (string) {
    const array = string.toLowerCase().split("");
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    const cleanArray = array.filter(character => alphanumeric.includes(character));
    subArray1 = cleanArray.slice(0, Math.floor(cleanArray.length / 2));
    subArray2 = cleanArray.slice(Math.ceil(cleanArray.length / 2)).reverse();
    return subArray1.join("") == subArray2.join("");
};

// Do not edit below this line
module.exports = palindromes;
