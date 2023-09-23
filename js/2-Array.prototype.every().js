let a = [1, 30, 39, 29, 10, 13];

let b = a.every(check);

console.log(b);

function check(value) {
  return (value) => 40;
}
