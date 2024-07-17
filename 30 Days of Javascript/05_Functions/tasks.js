// Function Declaration

// Task 1
function evenOdd(num) {
    console.log(`${num % 2 == 0 ? "Even" : "Odd"}`);
}
evenOdd(21);

// Task 2
function calculateSquare(num) { 
    return num * num;
}
console.log(calculateSquare(5));


// Function Expression

// Task 3
function findMaximum(num1, num2) {
    console.log(`${num1 > num2 ? num1 : num2} is greater`);
}
findMaximum(10, 5);

// Task 4
function concatString(str1, str2) {
    return str1 + str2;
}
console.log(concatString("Hello ", "World"));


// Arrow Function

// Task 5
const calculateSum = (num1, num2) => num1 + num2;
console.log(calculateSum(10, 5));

// Task 6
const includesChar = (str, char) => str.includes(char);
console.log(includesChar("Hello World", "o"));
console.log(includesChar("Hello World", "a"));


// Function Parameters and Default Values

// Task 7
function calculateProduct(num1, num2 = 2) {
    return num1 * num2;
}
console.log(calculateProduct(5));
console.log(calculateProduct(5, 10));

// Task 8
function getGreetingMessage(name, age = 20) {
    return `Hello ${name}, your age is ${age}`;
}
console.log(getGreetingMessage("Akshay"));
console.log(getGreetingMessage("Anshul", 30));


// Higher-Order Functions

// Task 9
const printHelloWorld = () => console.log("Hello World");
function printMessage(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
printMessage(printHelloWorld, 10);

// Task 10
function calculateSquareAndProduct(squarFun, productFun, num) {
    const square = squarFun(num);
    return productFun(square * 3);
}
console.log(calculateSquareAndProduct(calculateSquare, calculateProduct, 5));


