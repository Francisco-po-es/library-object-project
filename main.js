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
addBookToLibrary('2 napoleon a life', 'rhcp', 1999, 200, true);
addBookToLibrary('3 napoleon a life', 'rhcp', 1999, 200, true);
console.log(myLibrary);