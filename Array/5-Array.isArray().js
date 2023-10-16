// One

let a = [1, 3, 5];

let b = Array.isArray(a);

console.log(b);

// Two

let c = "[]";

let d = Array.isArray(c);

console.log(d);

// Three

console.log(Array.isArray(new Array(5)));

let e = new Array();

e = [5];

let f = Array.isArray(e);

console.log(f);

// Four

// console.log(Array.isArray(new Int16Array([15, 33])));

// let g = Array.isArray();

// g = [15, 33];

function checkIsArray(variable) {
  console.log(Array.isArray(variable));
}

// Example usage:
checkIsArray([15, 33]); // Output: true
checkIsArray(new Int16Array([15, 33])); // Output: false
