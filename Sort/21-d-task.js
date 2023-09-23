function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b)

}

const numbers = [10, 3, 8, 1, 5];
console.log(sortNumbersAscending(numbers)); // Output: [1, 3, 5, 8, 10]


const num = [10, 3, 7, 1, 5];

function solveSort(arr1) {
    return arr1.sort((c, d) => d - c)
}

console.log(solveSort(num));


const b = ['apple', 'banana', 'date', 'cherry']

function alphabet(arr2) {
    return arr2.sort()
}

console.log(alphabet(b));


function squareNum(num) {
    return num.map(sum => sum ** 2)
}


console.log(squareNum([2, 4, 6, 8]));

function upperAlphabet(alp) {
    return alp.map(change => change.toUpperCase())
}

console.log(upperAlphabet(['apple', 'banana', 'cherry']));


function sumOfNumber(arr4) {
    return arr4.reduce((a, b) => a + b, 0)
}


console.log(sumOfNumber([10, 5, 3, 7]));

function convert(con) {
    return con.reduce((a, b) => a + b)
}

console.log(convert(['Hello, ', 'world', '!']));

function squareSum(sum) {
    return sum.map(sum1 => sum1 ** 2)
}

console.log(squareSum([1, 2, 3, 4]));

function doubleNum(num1) {
    return num1.map(num2 => num2 * 2)
}

console.log(doubleNum([1, 2, 3, 4]));