function reverseString(arr) {
    return arr.split('').reverse().join('');
};


console.log(reverseString("hello"));

function reverseArray(arr1) {
    return arr1.reverse();
};

console.log(reverseArray([1, 2, 3, 4, 5]));

function acending(arr2) {
    return arr2.sort((elem1, elem2) => elem1 - elem2)
}

console.log(acending([5, 2, 8, 1, 4]));

function alphabet(arr3) {
    return arr3.split('').sort()
}

console.log(alphabet("hello"));

function Descending(arr4) {
    return arr4.sort((c, d) => c - d)
}

console.log(Descending([9, 4, 7, 1, 5]));