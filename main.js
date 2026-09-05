let cards = document.getElementById('cards');
/* the rest of the code unorganized */

const myLibrary = [];


function Book(title, author, year, pages, wasRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.wasRead = wasRead;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, year, pages, wasRead) {
    const book = new Book(title, author, year, pages, wasRead);
    myLibrary.push(book);
}
addBookToLibrary('1984', 'George Orwell', 1949, 328, true);
addBookToLibrary('One Hundred Years of Solitude', 'Gabriel García Márquez', 1967, 417, true);
addBookToLibrary('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 1178, false);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 1813, 279, true);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", 'J.K. Rowling', 1997, 256, true);
addBookToLibrary('The Alchemist', 'Paulo Coelho', 1988, 208, false);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 1960, 281, true);
addBookToLibrary('Dune', 'Frank Herbert', 1965, 412, false);
addBookToLibrary('Don Quixote', 'Miguel de Cervantes', 1605, 863, true);
addBookToLibrary('The Little Prince', 'Antoine de Saint-Exupéry', 1943, 96, true);
addBookToLibrary('Fahrenheit 451', 'Ray Bradbury', 1953, 158, false);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 180, true);
console.log(myLibrary);


for (let newbook of myLibrary) {
    let card = document.createElement('div');
    cards.appendChild(card);
    let bookTitle = document.createElement('span');
    bookTitle.id = 'book-title';
    bookTitle.textContent = `${newbook.title}`
    card.appendChild(bookTitle);
}