// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log('Random number between 1 and 10:', generateRandomNumber(1, 10));

function generatingNum(str, end) {
    const a = Math.random() * (end - str) + str
    return a
}
console.log(generatingNum(1, 10))