let myLibrary = [];

function Book(name, author) {
    this.name = name
    this.author = author
}

function addBookToLibrary() {
    const newBook = new Book($name.value, $author.value);
    myLibrary.push(newBook);
}

function displayBook() {
    const getBook = document.getElementById('getBook');
    const nameInp = document.getElementById('bookName');
    const authorInp = document.getElementById('author');
    const showBook =document.getElementById('showName');
    const showAuthor =document.getElementById('showAuthor');
    showBook.innerHTML = nameInp.value;
    showAuthor.innerHTML = authorInp.value;
    nameInp.value = '';
    author.value = '';
}