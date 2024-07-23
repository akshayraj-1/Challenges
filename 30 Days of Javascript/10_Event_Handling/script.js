// Basic Event Handling

// Task 1
const p = document.querySelector(".task-1 p");
const button = document.querySelector(".task-1 button");
button.addEventListener("click", () => {
    p.innerText = "Text has been changed using javascript";
});

// Task 2
const img = document.querySelector(".task-2 img");
img.addEventListener("dblclick", () => {
    img.style.visibility = "hidden";
});


// Mouse Events

// Task 3
const div3 = document.querySelector(".task-3");
div3.addEventListener("mouseover", () => {
    div3.style.backgroundColor = "lightgreen";
});

// Task 4
div3.addEventListener("mouseout", () => {
    div3.style.backgroundColor = "lightsalmon";
});



// Keyboard Events

// Task 5
const input = document.querySelector(".task-5 input");
input.addEventListener("keydown", (e) => {
    console.log(e.key);
});

// Task 6
const input2 = document.querySelector(".task-6 input");
const p2 = document.querySelector(".task-6 p");
input2.addEventListener("keyup", (e) => {
    p2.innerText = e.target.value;
});


// Form Events

// Task 7
const form = document.querySelector(".task-7 form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData.get("name"), formData.get("email"));
});

// Task 8
const selectBox = document.querySelector(".task-8 select");
const p3 = document.querySelector(".task-8 p")
selectBox.addEventListener("change", (e) => {
    p3.innerText = e.target.value;
});


// Event Delegation

// Task 9
const ul = document.querySelector(".task-9 ul");
ul.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        console.log(e.target.innerText);
    }
});

// Task 10
const list = document.querySelector(".list-container");
const btnAddItem = document.querySelector(".task-10 button");
const getNewItem = () => {
    const item = document.createElement("div");
    item.className = "item";
    item.style.cursor = "pointer";
    item.innerText = `Item ${parseInt(Math.random() * 10)}`;
    return item;
}
Array.from({ length: 3 }).forEach(() => {
    list.appendChild(getNewItem());
});

btnAddItem.addEventListener("click", () => {
    list.appendChild(getNewItem());
});

list.addEventListener("click", (e) => {
    if (e.target.className == "item") {
        window.alert("Clicked On: " + e.target.innerText);
    }
});


