const numbers = [10, 3, 8, 1, 5];

function check(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    })
}

console.log(check(numbers));