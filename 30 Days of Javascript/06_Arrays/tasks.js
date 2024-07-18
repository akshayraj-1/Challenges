// Array Creation and Access

// Task 1
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Task 2
console.log(arr1[0]);
console.log(arr1[4]);


// Array Methods (Basic)

// Task 3
arr1.push(6);
console.log(arr1);

// Task 4
arr1.pop();
console.log(arr1);

// Task 5
arr1.shift();
console.log(arr1);

// Task 6
arr1.unshift(0);
console.log(arr1);


// Array Methods (Intermediate)

// Task 7
const mappedArray = arr1.map(elem => elem * 2);
console.log(mappedArray);

// Task 8
const filteredArray = arr1.filter(elem => elem % 2 == 0);
console.log(filteredArray);

// Task 9
const sum = arr1.reduce((acc, elem) => acc + elem, 0);
console.log(sum);


// Array Interation

// Task 10
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// Task 11
arr1.forEach(elem => console.log(elem));


// Multi-dimensional Arrays

// Task 12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Task 13
console.log(matrix[1][2]); // Output: 6

