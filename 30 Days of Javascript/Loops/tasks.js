// For Loop

// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}


// While Loop

// Task 3
let i = 10;
let sum = 0;
while (i >= 1) {
    sum += i;
    i--;
}
console.log(sum);

// Task 4
let j = 10;
while (j >= 1) {
    console.log(j--);
}

// Do...While Loop

// Task 5
let k = 1;
do {
    console.log(k++);
    if (k >= 6) break;
} while (k <= 5);

// Task 6
let l = 5;
let fact = 1;
do {
    fact *= l--;
    if (l <= 1) break;
} while (l >= 1);
console.log(fact);


// Nested Loops

// Task 7
let n = 5;
for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}


// Loop Control Statements

// Task 8
for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

// Task 9
for (let i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);
}

/*
Remark: 
we can use the counter variable for the loop without using the 'let', 'const' or 'var' keyword it would be treated as global variable
this could lead to some unintended behaviour
to avoid this write -> 'use strict' on the top of the file
*/
