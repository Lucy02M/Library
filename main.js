let myLibrary = [];
const bName = document.querySelector("#name");
const bAuthor = document.querySelector("#author");
const newBook = document.getElementById("newBook");
const getBook = document.getElementById("getBook");
const isRead = document.getElementById("isRead");

function Book(name, author, isRead) {
  this.name = name;
  this.author = author;
  this.isRead = isRead;
}

function getNewBook() {
  newBook.style.display = "none";
  getBook.style.display = "flex";
}

function addBookToLibrary() {
  const newBook = new Book(bName.value, bAuthor.value, isRead.checked);
  myLibrary.push(newBook);
  render();
  cleanInput();
}

function render() {
  showBooks.innerHTML = "";
  const currentBook = myLibrary.forEach((book) => {
    const htmlBook = `<p>"${book.name}" by ${book.author}.</p>`;

    const card = document.createElement("div");
    card.classList.add("card");

    const bookName = document.createElement("button");
    bookName.classList.add('btn');
    bookName.classList.add('Nbtn');
    function readStatus() {
      if(book.isRead == true) {
        bookName.textContent = 'Read';
        bookName.style.background = '#ADC178';
      } else {
        bookName.textContent = 'Not read';
        bookName.style.background = '#C27C78';
      }
    }
    readStatus();

    const btnCard = document.createElement("div");
    btnCard.classList.add('btns');

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add('btn');
    removeBtn.classList.add('Rbtn');

    showBooks.prepend(card);
    card.insertAdjacentHTML("afterbegin", htmlBook.toUpperCase());
    card.append(btnCard);
    btnCard.append(bookName);
    btnCard.append(removeBtn);

    bookName.addEventListener("click", () => {
      if (book.isRead == true) {
        book.isRead = false;
        render();
      } else {
        book.isRead = true;
        render();
      }
    });

    removeBtn.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      render();
    });
  });
}

function cleanInput() {
  bName.value = "";
  bAuthor.value = "";
  newBook.style.display = "flex";
  getBook.style.display = "none";
}
