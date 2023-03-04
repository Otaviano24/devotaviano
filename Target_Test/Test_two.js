let valor1 = 2;
let valor2 = 1;
let valor3 = 0;
let fib = 0;

for (let i = 1; i <= 10; i++) {
    valor3 = valor1 + valor2;
    fib += " " + valor3;
    valor1 = valor2;
    valor2 = valor3;

}

console.log(fib);

