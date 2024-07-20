// Template Literals

// Task 1
const name = "John Doe";
const age = 38;
console.log(`Hi! I am ${name}. I am ${age} years old.`);

// Task 2
const str = `This is a multiline string
using template literal in
javascript.`;
console.log(str);


// Destructuring

// Task 3
const [first, second] = [1, 2, 3, 4, 5];
console.log(first, second);

// Task 4
const book = { title: "Book Title", author: "Book Author", year: 2000 };
const { title, author } = book;
console.log(title, author);


// Spread and Rest Operator

// Task 5
const arr = [1, 2, 3, 4];
const newarr = [...arr, 5, 6, 7];
console.log(newarr);

// Task 6
function sum(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(sum(5, 3, 5, 6, 7));


// Default Parameters

// Task 7
function product(num1, num2 = 1) {
    return num1 * num2;
}
console.log(product(50));


// Enhanced Object Literals

// Task 8
const attr = "dynamic"
const person = {
    name: "John Doe",
    age: 38,
    [attr]: "Dynamic attribute value", // ES6 dynamic property/attribute name
    showDetails() { // ES6 method decaltion in objects
        console.log(`Name: ${name}, Age: ${age}`);
    }
};
console.log(person);
console.log(person[attr]);
person.showDetails();

// Task 9
const prop1 = "firstname";
const prop2 = "lastname";
const user = {
    [prop1]: "John",
    [prop2]: "Doe"
};
console.log(user);



