/* // declare and define function, input output machines
// we can pass in arguments or parameters
function test(message) {
    console.log(message);
}

// run the function
test("Kenneth");

// String ""
const x = "String"
// declaring a varaible, defining a variable
test(x);

// Integer 
const y = 98;
test(y);

// Boolean true or false
const z = true;
test(z);

function addition(number, number2) {
    console.log(number + number2);
}

addition(1, 2);


// need to convert the string to a number
let a = Number(prompt("enter a number"));
let b = Number(prompt("enter another number"));
addition(a, b); */

function add(number1, number2) {
    // creates an output
    return (number1 + number2);
}

/* const sum = add(1, 2);
console.log(sum); */

function calc() {
    const sum = add(2, 5);
    console.log(sum);
}

calc();