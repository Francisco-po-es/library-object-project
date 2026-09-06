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
addBookToLibrary('The Little Prince', 'Antoine de Saint-Exupéry', 1943, 96, false);
addBookToLibrary('Fahrenheit 451', 'Ray Bradbury', 1953, 158, false);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 180, true);
console.log(myLibrary);


for (let newbook of myLibrary) {
    let card = document.createElement('div');
    card.id = 'card';
    cards.appendChild(card);

    let cover = document.createElement('img');
    cover.src = '/covers/default-cover.jpg'
    cover.id = 'cover';
    card.appendChild(cover);

    let info = document.createElement('div')
    info.id = 'info';
    card.appendChild(info);

    let bookTitle = document.createElement('span');
    bookTitle.id = 'book-title';
    bookTitle.textContent = `${newbook.title}`
    info.appendChild(bookTitle);
    
    let bookYear = document.createElement('div');
    bookYear.id = 'book-year';
    bookYear.textContent = `${newbook.year}`
    info.appendChild(bookYear);

    let bookInfo = document.createElement('p');
    bookInfo.id = 'book-info';
    bookInfo.textContent = `The author of this book is ${newbook.author}. It contains ${newbook.pages} pages. Congratulations for keeping reading with us. Let's go for more!`;
    info.appendChild(bookInfo);

    let status = document.createElement('div')
    status.id = 'status';
    let statusText = document.createElement('p')
    statusText.id = 'status-text';
    if (newbook.wasRead) {
        status.style.backgroundColor = 'green';
        statusText.textContent = 'You read this book!'
    } else {
        status.style.backgroundColor = 'red';
        statusText.textContent = 'You have not read this book... yet.'
    }
    card.appendChild(status);
    status.appendChild(statusText);
}

let modal = document.getElementById('modal');
let buttonOpen = document.getElementById('buttonAdd');
let buttonClose = document.getElementById('buttonCancel');

buttonOpen.addEventListener('click', () => {
    modal.showModal();
});
buttonClose.addEventListener('click', () => {
    modal.close();
})
