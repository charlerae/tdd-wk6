
// function that reverses a given string
function reverseString(string) {
    const stringArray = [];
    stringArray.push(string.split('').reverse().join(''));
    return stringArray;
}

module.exports = reverseString;
