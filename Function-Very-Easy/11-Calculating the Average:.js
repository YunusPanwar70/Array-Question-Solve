function claculateAverage(arr) {
    const sum = arr.reduce((total, num) => total + num, 0)
    return sum / arr.length;
}

console.log('Averag', claculateAverage([10, 5, 8, 15, 3]));