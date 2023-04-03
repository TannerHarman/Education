let myLibrary = JSON.parse(localStorage.getItem('books')) || [];

let submit = document.querySelector('button');
let bookList = document.querySelector('#book-list');

(populateExistingBooks = () => {
  myLibrary.map((book) => {
    return displayBooks(book);
  });
})();

submit.addEventListener('click', (e) => {
  addBookToLibrary(e);
  displayBooks(myLibrary[myLibrary.length-1]);
  localStorage.setItem('books', JSON.stringify(myLibrary));
});

bookList.addEventListener('click', removeBook);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = read;
    this.id = Math.round(Math.random() * 1000);
  }
}

function displayBooks(book) {
  return bookList.innerHTML  += `
  <div data-id='${book.id}' class="book">
    <div class="title">Book: ${book.title}</div>
    <div class="author">Author: ${book.author}</div>
    <div class="pages">Length: ${book.pages}</div>
    <div class="status">Status: ${book.status}</div>
    <button class="delete-button">Remove Book</button>
  </div>
  `
};

function addBookToLibrary(e) {
  e.preventDefault()
  
  let bookTitle = document.querySelector('#title').value;
  let bookAuthor = document.querySelector('#author').value;
  let bookLength = document.querySelector('#length').value;
  let bookStatus = 'Not Read';

  if (document.querySelector('#status').checked == true) {
    bookStatus = 'Read';
  };
  
  let finalBook = new Book(bookTitle, bookAuthor, bookLength, bookStatus);

  myLibrary.push(finalBook);
  localStorage.setItem('books', JSON.stringify(myLibrary));
};

function removeBook(e) {
  if(e.target.classList.contains('delete-button')) {
    if(confirm('Are you Sure?')){
      let book = e.target.parentElement;
      bookList.removeChild(book);

      myLibrary = myLibrary.filter((storedBook) => {
        return storedBook.id != Number(book.dataset.id)
      })
      
      localStorage.setItem('books', JSON.stringify(myLibrary));
    }
  };
}