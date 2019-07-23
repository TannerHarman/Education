let myLibrary = [
  {
    title: 'Penis',
    author: 'Penis',
    pages: 69,
    status: 'Read',
  }
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = read;
};

Book.prototype.info = function() {
  return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
}

function addBookToLibrary() {
  let bookTitle = document.querySelector('.form-title').lastElementChild.value;
  let bookAuthor = document.querySelector('.form-author').lastElementChild.value;
  let bookLength = document.querySelector('.form-pages').lastElementChild.value;
  let bookStatus = document.querySelector('.form-status').lastElementChild.value;
  let finalBook = Book(bookTitle, bookAuthor, bookLength, bookStatus);

  myLibrary.push(finalBook.info());
  console.log(myLibrary);
};

myLibrary.forEach((book) => {
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
});

submit = document.querySelector('button');
submit.onclick = addBookToLibrary();