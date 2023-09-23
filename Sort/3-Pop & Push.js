function removeLastElement(arr) {
    arr.pop();
    return arr;
};

console.log(removeLastElement([1, 2, 3, 4]));

function addValue(arr1) {
    arr1.push("hello", "world");
    return arr1;
};

console.log(addValue([]));

function addNum(arr2) {
    arr2.push(4);
    return arr2;
};

console.log(addNum([1, 2, 3]));


function lastRemove(arr3) {
    arr3.pop()
    return arr3
}

console.log(lastRemove([10, 20, 30, 40]));


function addAlp(arr4) {
    arr4.push("cherry")
    return arr4
}

console.log(addAlp(["apple", "banana"]));


function removeThreeElemetn(arr5) {
    arr5.splice(-3)
    return arr5
}

console.log(removeThreeElemetn([1, 2, 3, 4, 5, 6, 7]));

function emteyArray(arr6) {
    arr6.push(10, 20, 30)
    return arr6
}

console.log(emteyArray([]));