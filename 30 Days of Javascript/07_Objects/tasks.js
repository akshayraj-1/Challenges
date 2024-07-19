// Object Creation and Access

// Task 1
const book = {
    title: "Physics",
    author: "Newton",
    year: 1996
}
console.log(book);

// Task 2
console.log(book.title);
console.log(book.author);


// Object Methods

// Task 3
book.getDetails = function() {
    return `Name: ${this.title}, Author: ${this.author}`;
}
console.log(book.getDetails());

// Task 4
book.updateYear = function(year) {
    this.year = year;
}
book.updateYear(2000);
console.log(book);


// Nested Objects

// Task 5
const library = {
    name: "Library Name",
    books: [
        {
            id: 1,
            title: "Book1",
            author: "Great Author",
            year: 2001
        },
        {
            id: 2,
            title: "Book2",
            author: "Great Author2",
            year: 2005
        }
    ]
};
console.log(library);

// Task 7
console.log(library.name);
library.books.forEach(book => console.log(book.title));


// The this Keyword

// Task 7
book.getBookInfo = function () {
    return `${this.title}, ${this.year}`;
}
console.log(book.getBookInfo());


// Obejct Iteration

// Task 8
for (let key in book) {
    console.log(key, book[key]);
}

// Task 9
Object.keys(book).forEach(key => console.log(key));
Object.values(book).forEach(value => console.log(value));


