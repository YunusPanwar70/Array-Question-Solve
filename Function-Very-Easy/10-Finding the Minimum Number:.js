function findMin(number) {
    return Math.min(...number);
}

const number = [10, 5, 8, 15, 3];
console.log('Minimum Number', findMin(number));