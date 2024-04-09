// Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.

let n = 10;
let prev = 0;
let current = 1;
for (let i = 2; i < n; i++) {
    current = prev + current;
    prev = current - prev;
    console.log(current);
}
