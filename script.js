// selectors\
const bookWrap = document.querySelector(".book-wrap");

let myLibrary = [];

function Book(title, author, noOfPages, hasRead) {
  (this.title = title),
    (this.author = author),
    (this.noOfPages = noOfPages),
    (this.hasRead = hasRead),
    (this.info = function () {
      return `${this.title} by ${this.author}, ${noOfPages} pages, ${
        hasRead ? "read" : "not read yet"
      }`;
    });
}

Book.prototype.setBookId = function () {
  return crypto.randomUUID();
};

function addBookToLibrary(title, author, noOfPages, hasRead) {
  let newBook = new Book(title, author, noOfPages, hasRead);
  newBook.bookId = newBook.setBookId();
  myLibrary.push(newBook);

  // creates html for new book
  const singleBook = document.createElement("div");
  singleBook.classList.add("book-card");
  bookWrap.appendChild(singleBook);

  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("book-title");
  bookTitle.innerText = prompt("What is book title?");
  singleBook.appendChild(bookTitle);

  const bookAuthor = document.createElement("h4");
  bookAuthor.classList.add("book-author");
  bookAuthor.innerText = prompt("Who is book author?");
  singleBook.appendChild(bookAuthor);

  const bookPages = document.createElement("span");
  bookPages.classList.add("book-pages");
  bookPages.innerText = prompt("How many pages are there?");
  singleBook.appendChild(bookPages);

  const bookReadStatus = document.createElement("button");
  bookReadStatus.classList.add("book-read-status-btn");
  bookReadStatus.innerText = prompt("Have you read the book?");
  singleBook.appendChild(bookReadStatus);

  //   call displayLibrary()
}

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {}
}

const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", addBookToLibrary);
