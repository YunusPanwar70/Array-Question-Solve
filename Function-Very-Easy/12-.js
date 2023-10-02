function isString(str) {
    const a = str.split('').reverse().join('');
    return str === a;
};

console.log(isString("madam"));
console.log(isString("hello"));