// If-Else Statements

// Task 1
let num = 10;
if (num == 0) {
    console.log("Number is zero");
} else if (num > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is negative");
}

// Task 2
let age = 20;
if (age >= 18) {
    console.log("Person is eligible for voting");
} else {
    console.log("Person is not eligible for voting");
}

// Nested If-Else Statements

// Task 3
let a = 20;
let b = 30;
let c = 10;

if (a >  b && a > c) {
    console.log("a is greater");
} else if (b > c) {
    console.log("b is greater");
} else {
    console.log("c is greater");
}

// Switch Case

// Task 4
let day = 7;
switch (day) {
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");                          
}

// Task 5
let score = 80;
switch (true) {
    case score >= 80:
        console.log("A");
        break;
    case score >= 60:
        console.log("B");
        break;
    case score >= 40:
        console.log("C");
        break;
    case score >= 20:
        console.log("D");
        break;
    default:
        console.log("F");
}

// Ternary Operator

// Task 6
let num3 = 37;
console.log(num3 % 2 == 0 ? "Number is even" : "Number is odd");


// Combining Conditions

// Task 7
let year = 2000;
if (year % 4 == 0) {
    if ((year % 400 == 0 && year % 100 != 0) || (year % 400 != 0)) {
        console.log("Leap year")
    } else {
        console.log("Not a leap year");
    }
} else {
    console.log("Not a leap year");
}

