// Basic Error Handling with Try-Catch

// Task 1
function task1() {
  try {
    throw new Error("Intensionally thrown error");
  } catch (error) {
    console.error(error.toString());
  }
}
task1();

// Task 2
function divide(num1, num2) {
  try {
    if (num2 == 0) {
      throw new Error("Can't divide a number by 0");
    }
    const res = num1 / num2;
    console.log(res);
  } catch (error) {
    console.error(error.toString());
  }
}
divide(5, 0); // This will throw the error
divide(33, 2); // This will execute normally

// Finally Block

// Task 3
function task3() {
  try {
    console.log("Try block -> Task 3");
    if (Math.random() * 10 < 5) {
      throw new Error(
        "Error thrown by Task 3 because the number was less than 5"
      );
    }
  } catch (error) {
    console.error(error.toString());
  } finally {
    console.log("Finally block -> Task 3");
  }
}
task3();

// Custom Error Objects

// Task 4
class DivisionByZeroError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

function task4(num1, num2) {
  try {
    if (num2 == 0) {
      throw new DivisionByZeroError("Can't divide a number by zero");
    }
    console.log(num1 / num2);
  } catch (error) {
    console.error(error.toString());
  }
}
task4(12, 0);
task4(16, 4);

// Task 5
function isEmpty(str) {
  try {
    if (!str) {
      throw new Error("String is empty");
    }
  } catch (error) {
    console.error(error.toString());
  }
}
const message = "";
isEmpty(message);

// Error Handling in Promises

// Task 6
function task6() {
  return new Promise((resolve, reject) => {
    const num = parseInt(Math.random() * 10);
    if (num % 2 == 0) {
      resolve("Number is even: " + num);
    } else {
      reject("Number is odd: " + num);
    }
  });
}

task6()
  .then((response) => console.log(response))
  .catch((error) => console.error("Error: " + error));

// Task 7
async function task7() {
  try {
    await new Promise((resolve, reject) => {
      if ((Math.random() * 10) <= 5) {
        resolve("Task 7 Promise Resolved");
      } else {
        reject("Task 7 Promise Rejected");
      }
    });
  } catch (error) {
    console.error("Caught error:", error);
  }
}

task7();


// Graceful Error Handling in Fetch

// Task 8
fetch("https://invalid-api-url.com")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Task 8: Failed to fetch data"));

// Task 9
async function task9() {
  try {
    const response = await fetch("https://invalid-api-url.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Task 9: Failed to fetch data");
  }
}

task9();