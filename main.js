let myLibrary = [];
const bname = document.querySelector("#name");
const bauthor = document.querySelector("#author");
const newBook = document.getElementById('newBook')
const getBook = document.getElementById('getBook')
const isRead = document.getElementById('isRead');


function Book(name, author, isRead) {
    this.name = name
    this.author = author
    this.isRead = isRead
}

function getNewBook() {
    newBook.style.display = 'none';
    getBook.style.display = 'flex';
}

function addBookToLibrary() {
    const newBook = new Book(bname.value, bauthor.value, isRead.checked);
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
          <button id="remove">x</button>
        </tr>
        `;
      
        const bookName = document.createElement('button');
        bookName.textContent = book.isRead;


      showBooks.insertAdjacentHTML("afterbegin", htmlBook);
      showBooks.appendChild(bookName);

      bookName.addEventListener('click', () => {
        if(book.isRead == true){
          book.isRead = false;
          render();
        }
        else {
          book.isRead = true;
          render();
        }
      })

      const removeBtn = document.getElementById('remove')
      removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book),1);
        render();
    })
    });
  }

 

  function cleanInput() {
    bname.value = '';
    bauthor.value = '';
    newBook.style.display = 'flex';
    getBook.style.display = 'none';
  };

  
