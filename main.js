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
    render();
    cleanInput();
}

function render() {
    showBooks.innerHTML = "";
    myLibrary.forEach((book) => {
        const htmlBook = `
        <tr>
          <td>${book.name}</td>
          <td>${book.author}</td>
        </tr>
        `;
      showBooks.insertAdjacentHTML("afterbegin", htmlBook);
    });
  }

  function cleanInput() {
    bname.value = '';
    bauthor.value = '';
  };
  
