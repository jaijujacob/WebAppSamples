function add(x, y) {
    return x + y;
}
function substract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function devide(x, y) {
    return x / y;
}
function mod(x, y) {
    return x % y;
}

function calculator(x, y, func) {
    return func(x, y);
}

console.log(calculator(5, 5, add));
console.log(calculator(5, 5, substract));
console.log(calculator(5, 5, multiply));
console.log(calculator(5, 5, devide));
console.log(calculator(5, 5, mod));
