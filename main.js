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
    const htmlBook = `
        <tr>
          <td>${book.name}</td>
          <td>${book.author}</td>
        </tr>
        `;

    const card = document.createElement("div");
    card.classList.add("card");

    const bookName = document.createElement("button");
    function readStatus() {
      if(book.isRead == true) {
        bookName.textContent = 'Read';
      } else {
        bookName.textContent = 'Not read';
      }
    }
    readStatus();

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    showBooks.prepend(card);
    card.insertAdjacentHTML("afterbegin", htmlBook);
    card.append(bookName);
    card.append(removeBtn);

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
