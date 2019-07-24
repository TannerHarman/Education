let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = read;
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
};

function addBookToLibrary(e) {
  e.preventDefault()
  
  let bookTitle = document.querySelector('.form-title').lastElementChild.value;
  let bookAuthor = document.querySelector('.form-author').lastElementChild.value;
  let bookLength = document.querySelector('.form-pages').lastElementChild.value;
  let bookStatus = document.querySelector('.form-status').lastElementChild.value;
  
  let finalBook = new Book(bookTitle, bookAuthor, bookLength, bookStatus);

  myLibrary.push(finalBook);
  displayBooks(myLibrary.pop());
};

let submit = document.querySelector('button');
submit.addEventListener('click', addBookToLibrary); 
