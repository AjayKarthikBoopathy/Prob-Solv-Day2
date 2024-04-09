// Write a function that takes a number as input and returns the factorial of that number.

const factFunc = function factorial(num){
var fact = 1;
var i = 1;
while (i<=num) {
    fact = fact * i;
    i++;
}
return fact;
}

console.log(factFunc(5));
console.log(factFunc(3));