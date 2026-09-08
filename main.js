let cards = document.getElementById('cards');
/* the rest of the code unorganized */

let myLibrary = [];


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
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 1813, 279, false);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", 'J.K. Rowling', 1997, 256, true);
addBookToLibrary('The Little Prince', 'Antoine de Saint-Exupéry', 1943, 96, false);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 180, true);
console.log(myLibrary);

let modal = document.getElementById('modal');
let buttonOpen = document.getElementById('buttonAdd');
let buttonClose = document.getElementById('buttonCancel');
let buttonCreate = document.getElementById('buttonCreate')


buttonOpen.addEventListener('click', () => {
    modal.showModal();
});
buttonClose.addEventListener('click', () => {
    modal.close();
})

buttonCreate.addEventListener('click', (e) => {
    e.preventDefault();
    let newTitle = document.querySelector('.title-newbook').value;
    let newAuthor = document.querySelector('.author-newbook').value;
    let newYear = parseInt(document.querySelector('.year-newbook').value);
    let newPages = parseInt(document.querySelector('.pages-newbook').value);
    let status = document.querySelector('.status-newbook').checked;
    addBookToLibrary(newTitle, newAuthor, newYear, newPages, status);
    addCards(myLibrary);
    modal.close();
})

Book.prototype.toggleRead = function() {
    this.wasRead = !this.wasRead;
};

function addCards(Library) {
    cards.innerHTML = '';
    for (let newbook of Library) {
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
            statusText.textContent = 'Read!'
        } else {
            status.style.backgroundColor = 'red';
            statusText.textContent = 'Not read... yet.'
        }
        card.appendChild(status);
        status.appendChild(statusText);

        let buttonDelete = document.createElement('button');
        buttonDelete.id = 'buttonDelete';
        buttonDelete.textContent = 'Delete Book';
        buttonDelete.addEventListener('click', () => {
            myLibrary = myLibrary.filter((deletebook) => deletebook !== newbook);
            addCards(myLibrary);
        });
        status.appendChild(buttonDelete);

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.id = 'toggleReadBtn';
        toggleReadBtn.textContent = 'Change status';

        toggleReadBtn.addEventListener('click', () => {
            newbook.toggleRead();
            addCards(Library);
        });

        status.appendChild(toggleReadBtn);
    }
}

addCards(myLibrary);



