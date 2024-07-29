// Understanding Promisses

// Task 1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 is resolved");
    }, 2000);
}); 
promise1.then(msg => console.log(msg));

// Task 2
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 is rejected");
    }, 2000);
});
promise2.catch(error => console.log(error));


// Chainning Promisses

// Task 3
new Promise((resolve, reject) => {
    return resolve("Data fetched from the server");
}).then(data => {
    return "Parsed data: " + data;
}).then(parsedData => {
    console.log(parsedData);
});


// Using Async/Await

// Task 4
async function task4() {
    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved the task 4 promise")
        }, 3000);
    });
    const fromattedResponse = "Formatted data: " + response;
    console.log(fromattedResponse);
}

task4();

// Task 5
async function task5() {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Task 5 promise is rejected");
            }, 3000);
        });
    } catch (error) {
        console.log(error);
    }
}

task5();


// Fetching Data from an API

// Task 6
fetch("https://dummyjson.com/c/828a-e7e2-43e9-9e71")
.then(response => response.json())
.then(data => console.log(data));


// Task 7
async function task7() {
    const response = await fetch("https://dummyjson.com/c/1fb9-928c-4523-8392");
    const data = await response.json();
    console.log(data);
}

task7();


// Concurrent Promises

// Task 8
const prom1 = new Promise((resolve, reject) => resolve("Resolved Task 8 Promise 1"));
const prom2 = new Promise((resolve, reject) => 
    setTimeout(() => {
    resolve("Resolved Task 8 Promise 2");
}, 1000));
const prom3 = new Promise((resolve, reject) => resolve("Resolved Task 8 Promise 3"));

Promise.all([prom1, prom2, prom3])
.then(datas => {
    for (let val of datas) {
        console.log(val);
    }
});

// Task 9
const prom4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This will not be shown");
    }, 1500);
});

const prom5 = Promise.resolve("This will be reolved first");

Promise.race([prom4, prom5]).then(data => console.log(data));














