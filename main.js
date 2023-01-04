let myLibrary = [];
const bname = document.querySelector("#name");
const bauthor = document.querySelector("#author");

function Book(name, author) {
    this.name = name
    this.author = author
}

function addBookToLibrary() {
    const newBook = new Book(bname.value, bauthor.value);
    myLibrary.push(newBook);
    displayBook();
}

function displayBook() {
    const showBook = document.getElementById('showName');
    const showAuthor = document.getElementById('showAuthor');
    showBook.innerHTML = bname.value;
    showAuthor.innerHTML = bauthor.value;
    bname.value = '';
    bauthor.value = '';
}