let myLibrary = [];

let submit = document.querySelector('button');
submit.addEventListener('click', addBookToLibrary);

let removeBookDiv = document.querySelector('#book-list');
removeBookDiv.addEventListener('click', removeBook);


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = read;

  this.info = function() {
    return [title, author, pages, read]
  }
};

function displayBooks(book) {
  const bookList = document.querySelector('#book-list');

  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  bookList.appendChild(bookDiv);

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('title');
  bookTitle.textContent = `Title: ${book.title}`
  bookDiv.appendChild(bookTitle);

  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('author');
  bookAuthor.textContent = `author: ${book.author}`
  bookDiv.appendChild(bookAuthor);

  const bookPages = document.createElement('div');
  bookPages.classList.add('pages');
  bookPages.textContent = `Pages: ${book.pages}`
  bookDiv.appendChild(bookPages);

  const bookStatus = document.createElement('div');
  bookStatus.classList.add('status');
  bookStatus.textContent = `Status: ${book.status}`
  bookDiv.appendChild(bookStatus);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'delete-button';
  removeBtn.textContent = 'x';
  bookDiv.appendChild(removeBtn);

  console.log(book.info());
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
  displayBooks(myLibrary.pop());
};

function removeBook(e) {
  if(e.target.classList.contains('delete-button')) {
    if(confirm('Are you Sure?')){
      let book = e.target.parentElement;
      removeBookDiv.removeChild(book);
    }
  };
}