let myLibrary = [];
const bname = document.querySelector("#name");
const bauthor = document.querySelector("#author");
const newBook = document.getElementById('newBook')
const getBook = document.getElementById('getBook')


function Book(name, author, status) {
    this.name = name
    this.author = author
    this.status = status
}

function getNewBook() {
    newBook.style.display = 'none';
    getBook.style.display = 'flex';
}

function addBookToLibrary() {
    const newBook = new Book(bname.value, bauthor.value);
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
          <input type="checkbox" id="switchT" class="checkbox" name="switchT">
          <label for="switchT" id="toggle" class="toggle">
            <p>Read Not read</p>
        </div>
        </tr>
        `;
    

      showBooks.insertAdjacentHTML("afterbegin", htmlBook);
     
      /*toggleS.onclick = function(){
        if(switchT.checked == 1) {
          Book.status = 'Read';
        }
        else {
          Book.status = 'Read';
        }
       };*/
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

  
